import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';
import ItemList from './ItemList';



var PagesBar = React.createClass({

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  },

  render() {
  	const nextRoute = {
      component: ItemList,
      title: 'Bar That',
      passProps: { myProp: 'bar' }
    };

    return (
      <View style={styles.container}>
      	<View style={styles.linkContainer}>
	      	<TouchableOpacity onPress={() => this._handleNextPress(nextRoute)}>
	    		<Icon name="th-large" size={28} color='#4A001F'/>
	    	</TouchableOpacity>
	    </View>
	    <View style={styles.linkContainer}>
	      	<TouchableOpacity >
	    		<Ionicons name="ios-wine" size={28} color='#4A001F'/>
	    	</TouchableOpacity>
	    </View>
	    <View style={styles.linkContainer}>
	      	<TouchableOpacity >
	    		<Icon name="user" size={28} color='#4A001F'/>
	    	</TouchableOpacity>
	    </View>
      </View>
    );
  }

});



const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    borderTopColor: '#bbbbbb',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eeeeee',
  },
  linkContainer: {
  	flexDirection: 'column',
  	justifyContent: 'center',
  	padding: 10,
  }

});


module.exports = PagesBar;