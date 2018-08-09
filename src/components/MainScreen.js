import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = ({ dispatch }) => (
  <View style={styles.container}>
    <Button
        onPress={ () => dispatch(NavigationActions.navigate({ routeName: 'SubScreen' })) }
        title="Screen 2"
      />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Screen 1',
};

export default connect()(MainScreen);

