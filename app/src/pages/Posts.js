import React from "react";
import { View, Text } from "react-native";
import TodoCard from "../components/TodoCard";

const Posts = () => {
  return (
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello Post</Text>
      <TodoCard />
    </View>
  );
};

export default Posts;
