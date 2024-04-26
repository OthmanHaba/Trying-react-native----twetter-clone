import { StatusBar } from "expo-status-bar";
import { Button,StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Navigate To New Tweet" onPress={() => navigation.navigate('New Tweet')}/>
      <Button title="Navigate To Profile" onPress={() => navigation.navigate('Profile')}/>
      <Button title="Navigate To New Tweet" onPress={() => navigation.navigate('Tweets')}/>
    </View>
  );
}
