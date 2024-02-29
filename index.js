/**
 * @format
 */
import { YellowBox } from 'react-native';


import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

console.disableYellowBox = true;

YellowBox.ignoreWarnings(['Warning message 1', 'Warning message 2']);

AppRegistry.registerComponent(appName, () => App);
