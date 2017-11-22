import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const headerRight = (
      <Button
        title="Save"
        onPress={params.handleSave ? params.handleSave : () => null}
      />
    );
    return { headerRight };
  };

  _handleSave = () => {
    Alert.alert('saving...');
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this._handleSave });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate('Settings')} title="Go to Settings" />
      </View>
    )
  }
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  )
}

const HOME = 'Home';
const PROFILE = 'Profile';
export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: HOME,
      tabBarLabel: HOME,
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: PROFILE,
      tabBarLabel: PROFILE,
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});