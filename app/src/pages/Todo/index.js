import React, { useEffect } from "react";
import Tasks from "./Tabs/Tasks";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useDispatch } from "react-redux";
import { fetchAllTodos } from "../../redux/features/todo/TodoSlice";

const Tab = createMaterialTopTabNavigator();

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
      }}
    >
      <Tab.Screen
        name="Tâches"
        component={Tasks}
        initialParams={{ tabId: 0, tabStatus: "stable" }}
      />
      <Tab.Screen
        name="En cours"
        component={Tasks}
        initialParams={{ tabId: 1, tabStatus: "progress" }}
      />
      <Tab.Screen
        name="Terminé"
        component={Tasks}
        initialParams={{ tabId: 2, tabStatus: "finished" }}
      />
    </Tab.Navigator>
  );
};

export default Todo;
