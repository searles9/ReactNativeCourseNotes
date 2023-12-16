import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          // drawerActiveBackgroundColor: "#f0e1ff",
          // drawerActiveTintColor: "#3c0a6b",
          // // drawerStyle: {backgroundColor: '#ccc'},
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6b"
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarLabel: "Welcome",
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" size={size} color={color}/>
            )
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarLabel: "User",
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" size={size} color={color}/>
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
