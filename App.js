import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AlarmClock from "react-native-alarm-clock";
export default function App() {
	// Create an alarm at 1:55PM for next day, with the label 'My Custom Alarm'
	let date = new Date();
	date.setDate(date.getDate() + 1);
	date.setHours(13, 55);

	AlarmClock.createAlarm(date.toISOString(), "My Custom Alarm");
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
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
