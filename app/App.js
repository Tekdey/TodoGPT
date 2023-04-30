import * as React from "react";

import Todo from "./src/pages/Todo";
import Posts from "./src/pages/Posts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const Tab = createBottomTabNavigator();

export default function TabViewExample() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Todo">
          <Tab.Screen
            name="Todo"
            component={Todo}
            screenOptions={{ title: "Overview" }}
            options={{
              tabBarBadge: 3,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book" color={color} size={26} />
              ),
              headerStyle: {
                backgroundColor: "#000",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Tab.Screen
            name="Posts"
            component={Posts}
            options={{
              title: "GPT",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="access-point"
                  color={color}
                  size={26}
                />
              ),
              headerStyle: {
                backgroundColor: "#000",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
