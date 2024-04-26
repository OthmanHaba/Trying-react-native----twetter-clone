import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import TweetsScreen from "./screens/TweetsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NewTweetScreen from "./screens/NewTweetScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:true,
      title:''
    }}>
      <Stack.Screen name="Tab" component={TabNavigator} options={{
        headerShown:false,
      }}/>
      <Stack.Screen name="Tweets" component={TweetsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="New Tweet" component={NewTweetScreen} />
    </Stack.Navigator>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTap"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={24} color="black" />;
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="SettingsTap"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="setting" size={24} color="black" />;
          },
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Feed"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          initialRouteName="Home"
          name="Home"
          component={HomeStackNavigator}
        />
        <Drawer.Screen
          initialRouteName="Home"
          name="Settings"
          component={SettingsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
