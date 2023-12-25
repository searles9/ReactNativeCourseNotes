import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    allowAnnouncements: true,
  }),
});

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to show notifications has not been granted.");
      }
    })();
  }, []);

  useEffect(() => {
    // Get the notification data when it comes in
    const subscription1 = Notifications.addNotificationReceivedListener((notification) => {
      console.log('NOTIFICATION RECEIVED')
      console.log(notification)
    })

    // get the notification data when you tap the notification
    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('Notification response recieved')
      console.log(response)
    });

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []) 
  
  function buttonHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 1,
      },
    });
    console.log("Button Clicked");
  }

  return (
    <View style={styles.container}>
      <Button title="Schedule Notification" onPress={buttonHandler}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
