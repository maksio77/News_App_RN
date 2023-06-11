import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartScreen from "./screens/StartScreen";
import DetailScreen from "./screens/DetailScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style='dark'/>
        <Stack.Navigator>
          <Stack.Screen name="All News" component={StartScreen} option={{title: 'News'}}/>
          <Stack.Screen name="FullPost" component={DetailScreen} option={{title: 'Article'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
