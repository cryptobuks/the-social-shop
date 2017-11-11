import React from 'react';
var uuid = require('uuid');
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Image
} from 'react-native';

import {unauthUser, getAllItems} from '../actions';
import ItemList from './ItemList';


var Item = connect()(React.createClass({

	render() {
      

		return(
      <View style={styles.itemContainer}>
        <Image
          style={styles.itemImg}
          source={{uri: this.props.img}}
        />
        <View style={styles.singleItem}>
    			<View style={styles.todosContainer}>

            <View>
              <Text style={styles.itemText}>
                {this.props.name}
              </Text>
            </View>
            <Text style={styles.itemText}>
              {this.props.typology}
            </Text>
            <Text style={styles.itemText}>
              {this.props.producer}
            </Text>
            <Text style={styles.itemText}>
              € {this.props.price}
            </Text>
    			</View>

          
        </View>
      </View>
		)
	}
}));


var AllItemList = React.createClass({

  getInitialState() {
  	return {
  		refreshing: false,
      loading: false
  	}
  },

  onLogOut() {
  	this.props.dispatch(unauthUser);
  },

  _handleNextPress(nextRoute) {

    this.props.navigator.pop();
    
  },

  onRefresh() {
    this.setState({
      refreshing: true
    });

    this.props.dispatch(getAllItems).then(() => {
      this.setState({
        refreshing: false
      });
    });
  },

 

  render() {

    const itemListUser = {
      component: ItemList,
      title: 'Indietro',
      navigationBarHidden: true
    };
  	

  	var renderItems = (items) => {
  		return items.map((item) => {
        console.log(item);
  			return (
  				<Item key={uuid.v4()} 
                name={item.name} 
                price={item.price}
                typology={item.typology.name}
                producer={item.producer.name}
                img={item.img}
                id={item._id}/>
  			)
  		})
  	}
    return (
      <View style={styles.container}>
      	<View style={styles.topBar}>
    			<TouchableOpacity onPress={this.onLogOut}>
    			  <SimpleIcon name="logout" size={20} color='white' />
    			</TouchableOpacity>
          		<Text style={styles.title}>
          			Tutti i prodotti
          		</Text>
          <TouchableOpacity onPress={this.onAddNewToDo}>
    			  <Icon name="user" size={28} color='white'/>
    			</TouchableOpacity>
      	</View>
      	<ScrollView
      		refreshControl = {
      			<RefreshControl 
      				refreshing={this.state.refreshing}
      				onRefresh={this.onRefresh}/>
      		}
      		automaticallyAdjustContentInsets={false}
      		contentContainerStyle={styles.scrollviewContainer} >
      		{renderItems(this.props.allItems)}
      	</ScrollView>

        <View style={styles.containerBar}>
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => this._handleNextPress(itemListUser)}>
              <Ionicons name="ios-wine-outline" size={28} color='#4A001F'/>
            </TouchableOpacity>
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity >
            <Icon name="square" size={28} color='#4A001F'/>
          </TouchableOpacity>
        </View>
        
        </View>
      </View>
    );
  }

});


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  topBar: {
  	justifyContent: 'space-between',
  	alignItems: 'center',
  	flexDirection: 'row',
  	backgroundColor: '#4A001F',
  	padding: 16,
  	paddingTop: 24,
  	paddingBottom: 8
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Baskerville',
  },
  todosContainer: {
    padding: 5,
    paddingBottom: -5,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  itemText: {
    paddingTop: 12,
    fontFamily: 'Baskerville',
    fontSize: 16,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10
  },
  singleItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'stretch',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
  },
  containerBar: {
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
  },
  itemImg: {
    width: 40, 
    height: 70, 
    marginTop: 4, 
    marginBottom: 4, 
    marginLeft: 8, 
    marginRight: -4
  }


});

var mapStateToProps = (state) => {
	return {
		allItems: state.allItems
	}
}


module.exports = connect(mapStateToProps)(AllItemList);