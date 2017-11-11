import { Navigation } from 'react-native-navigation';

import MainTabScreen from '../app/components/Main';
import ItemListScreen from '../app/components/ItemList';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.MainTabScreen', () => MainTabScreen);
  Navigation.registerComponent('itemListScreen', () => ItemListScreen);
}