import { FlatList } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import TodoCard from "../../../components/TodoCard";
import { useEffect } from "react";
import {
  fetchAllTodos,
  getTodoByStatus,
} from "../../../redux/features/todo/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Tasks = (props) => {
  const { tabStatus, tabId } = props.route.params;

  const dispatch = useDispatch();

  const { todos, isLoading } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodoByStatus({ status: tabStatus }));
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: "100%" }}>
        {/* <TodoCard {...DATA} tabId={tabId} /> */}
        <FlatList
          style={styles.flatList}
          data={todos[tabStatus]}
          renderItem={({ item }) => (
            <TodoCard {...item} tabStatus={tabStatus} tabId={tabId} />
          )}
          keyExtractor={(item) => Date.now() * Math.random() * 983}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    flex: 1,
    paddingTop: 10,
  },
});

export default Tasks;
