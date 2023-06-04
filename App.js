import * as Font from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Setting from './assets/Screens/Setting';
import Comment from './assets/Screens/Comment';
import AddAddress from './assets/Screens/AddAddress';
const Stack = createStackNavigator();
export default function App() {

  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
      PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
      PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    })
      .then(() => {
        setIsFontLoaded(true)
      });
  }, []);

  if (!isFontLoaded) return null;

  if (isFontLoaded) return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <Text>Jai Shree Ram</Text>
      <Button
        title="Go to Details"
        
        onPress={() => navigation.navigate('Home')}
      /> */}
      <Stack.Navigator initialRouteName="Setting">
        <Stack.Screen name="Comment" component={Comment} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="AddAddress" component={AddAddress} />

      </Stack.Navigator>
      <StatusBar style="auto" />
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
