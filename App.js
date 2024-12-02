import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/Homescreen.js";
import CocktailDetail from "./screens/CocktailDetail";
import CocktailsScreen from "./screens/CocktailsScreen.js";
import BarToolsScreen from "./screens/BarToolsScreen.js";
import ToolDetail from "./screens/ToolDetail";
import SearchScreen from "./screens/SearchScreen.js";
import CocktailsList from "./screens/CocktailsList";
import ContactScreen from "./screens/ContactScreen.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Cocktails") {
            iconName = focused ? "wine" : "wine-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Tools") {
            iconName = focused ? "construct" : "construct-outline";
          } else if (route.name === "Contact") {
            iconName = focused ? "mail" : "mail-outline"; 
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#000",
        tabBarActiveTintColor: "#FF6B6B",
        tabBarInactiveTintColor: "#666",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cocktails" component={CocktailsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Tools" component={BarToolsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CocktailDetail"
          component={CocktailDetail}
          options={({ route }) => ({
            title: route.params.cocktail.name,
          })}
        />
        <Stack.Screen
          name="ToolDetail"
          component={ToolDetail}
          options={({ route }) => ({
            title: route.params.tool.name,
          })}
        />

        <Stack.Screen
          name="CocktailsList"
          component={CocktailsList}
          options={({ route }) => ({
            title:
              route.params.spirit.charAt(0).toUpperCase() +
              route.params.spirit.slice(1) +
              " Cocktails",
          })}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
