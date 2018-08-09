// @flow
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

const dispatchWrapper = (customDispatch) => {
  return args => {
    console.log('Hooray! I am dispatched');
    customDispatch(args);
  }
}

export default function createNavigator(routeConfig) {
  const navigatorConfig = {
    onTransitionEnd: (to, from) => {
      to.navigation.dispatch({ type: 'TEST_ACTION' });
    }
  };
  const Navigator = createStackNavigator(routeConfig, navigatorConfig);

  return connect(
    null,
    null,
    (stateProps, dispatchProps, { screenProps, navigation }) =>
      ({
        navigation: {
          ...navigation,
          dispatch: dispatchWrapper(navigation.dispatch)
        },
        screenProps
      })
  )(Navigator);
}
