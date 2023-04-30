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
import { StyleSheet } from "react-native";
import { increment } from "../redux/features/todo/TodoSlice";
import { useSelector, useDispatch } from "react-redux";

const TodoCard = ({ title, status, deadLine }) => {
  const count = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <Drawer
      style={styles.card_main_container}
      rightItems={[
        {
          text: "Read",
          background: Colors.blue30,
          onPress: () => console.log("read pressed"),
        },
      ]}
      leftItem={{
        text: "Delete",
        background: Colors.red30,
        onPress: () => console.log("delete pressed"),
      }}
      fullSwipeLeft={true}
      fullSwipeRight={true}
      onWillFullSwipeLeft={() => console.log("full wipe")}
      onWillFullSwipeRight={() => console.log("full wipe right")}
    >
      <View style={styles.card_container}>
        <View style={styles.card_container_status}>
          <Text
            style={{
              fontSize: 16,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            onPress={() => dispatch(increment())}
          >
            {status}
          </Text>
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
