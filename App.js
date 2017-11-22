/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import MainScreen from './src/MainScreen';

function resetTo(navigation, routeName) {
  const action = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
  });
  return navigation.dispatch(action);
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Reset to Main" onPress={() => resetTo(navigation, 'Main')} />
    </View>
  )
}

export default StackNavigator({
  Main: {
    screen: MainScreen
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings'
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

