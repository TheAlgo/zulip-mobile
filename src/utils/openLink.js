/* @flow */
import { NativeModules, Platform } from 'react-native';
import SafariView from 'react-native-safari-view';

export default (url: string): void => {
  if (Platform.OS === 'ios') {
    SafariView.show({ url });
  } else {
    NativeModules.CustomTabsAndroid.openURL(url);
  }
};
