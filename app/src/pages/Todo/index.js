import React from "react";
import Tasks from "./Tabs/Tasks";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useGetPokemonByNameQuery } from "../../redux/features/todo/TodoSlice";

const Tab = createMaterialTopTabNavigator();

const Todo = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
      }}
    >
      <Tab.Screen
        name="Tâches"
        component={Tasks}
        initialParams={{ tabStatus: "stable", data }}
      />
      <Tab.Screen
        name="En cours"
        component={Tasks}
        initialParams={{ tabStatus: "progress" }}
      />
      <Tab.Screen
        name="Terminé"
        component={Tasks}
        initialParams={{ tabStatus: "finished" }}
      />
    </Tab.Navigator>
  );
};

export default Todo;
