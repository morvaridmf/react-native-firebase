import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import LogInScreen from "./components/LogInScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native-web'



const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen options={{ headerShown: false }} name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  }

});