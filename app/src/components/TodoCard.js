import React from "react";
import {
  Assets,
  Colors,
  Typography,
  View,
  Drawer,
  Text,
  Button,
  Avatar,
  Badge,
} from "react-native-ui-lib"; //eslint-disable-line
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  changeTodoStatusSlice,
  deleteTodoSlice,
} from "../redux/features/todo/TodoSlice";
import { useDispatch } from "react-redux";

const __statics = {
  status: ["Tâches", "En cours", "Terminé", "Archiver"],
  _status: ["stable", "progress", "finished", "archive"],
};

const TodoCard = ({ title, priority, deadLine, tabId, _id, tabStatus }) => {
  const dispatch = useDispatch();

  const handleChangeStatus = (cardId, currentStatus, newStatus) => {
    // card-id // new-status
    console.log(cardId, currentStatus, newStatus);
    // change card status
    if (newStatus === "delete") {
      console.log("delete");
      dispatch(deleteTodoSlice({ _id: cardId, currentStatus, newStatus }));
    } else {
      console.log("change status");
      dispatch(
        changeTodoStatusSlice({ _id: cardId, currentStatus, newStatus })
      );
    }
  };

  return (
    <Drawer
      style={styles.card_main_container}
      rightItems={[
        {
          text: !tabId ? "delete" : __statics.status[tabId - 1],
          background: !tabId ? Colors.red30 : Colors.green30,
          onPress: () =>
            handleChangeStatus(
              _id,
              tabStatus,
              !tabId ? "delete" : __statics._status[tabId - 1]
            ),
        },
      ]}
      leftItem={{
        text: __statics.status[tabId + 1],
        background: Colors.blue30,
        onPress: () =>
          handleChangeStatus(_id, tabStatus, __statics._status[tabId + 1]),
      }}
      fullSwipeLeft={true}
      fullSwipeRight={true}
      onWillFullSwipeLeft={() =>
        handleChangeStatus(_id, tabStatus, __statics._status[tabId + 1])
      }
      onWillFullSwipeRight={() =>
        handleChangeStatus(
          _id,
          tabStatus,
          !tabId ? "delete" : __statics._status[tabId - 1]
        )
      }
    >
      <View style={styles.card_container}>
        <View style={styles.card_container_status}>
          <Text
            style={{
              fontSize: 16,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {priority}
          </Text>

          <TouchableOpacity
            onPress={() =>
              handleChangeStatus(
                _id,
                tabStatus,
                !tabId ? "delete" : __statics._status[tabId - 1]
              )
            }
          >
            <Text>{!tabId ? "DELETE" : __statics.status[tabId - 1]}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              handleChangeStatus(_id, tabStatus, __statics._status[tabId + 1])
            }
          >
            <Text>{__statics.status[tabId + 1]}</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 13 }}>deadline: {deadLine}</Text>
        </View>
        <View style={styles.card_container_title}>
          <Text style={{ fontSize: 18 }}>{title}</Text>
        </View>
      </View>
    </Drawer>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  card_main_container: {
    width: 350,
    margin: 6,
    borderRadius: 4,
  },
  card_container: {
    width: "100%",
    backgroundColor: "white",
  },
  card_container_title: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  card_container_status: {
    backgroundColor: "orange",
    // borderRadius: 10,
    padding: 5,
    fontWeight: "bold",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
