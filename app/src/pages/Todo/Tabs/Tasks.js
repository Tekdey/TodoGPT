import { FlatList } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import TodoCard from "../../../components/TodoCard";

const Tasks = (props) => {
  const { tabStatus, data } = props.route.params;

  const DATA = [
    {
      key: "Devin",
      title: "Devin",
      status: "urgent",
      deadLine: "06/07/2023",
    },
  ];

  console.log(data);

  return (
    tabStatus === "stable" && (
      <View style={styles.container}>
        <View style={{ flex: 1, width: "100%" }}>
          <FlatList
            style={styles.flatList}
            data={DATA}
            renderItem={({ item }) => <TodoCard {...item} />}
            keyExtractor={(item) => Date.now() * Math.random() * 983}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
      </View>
    )
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
