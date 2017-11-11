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

import {unauthUser, getItems, getAllItems, likeItem, dislikeItem, rankItem} from '../actions';
import AllItemList from './AllItemList';
import ItemUserRecap from './ItemUserRecap';


var Item = connect()(React.createClass({
  getInitialState() {
    return {
      liking: false,
      disliking: false,
      ranking: false
    }
  },

  

  onLike() {
    this.setState({
      liking: true
    });

    this.props.dispatch(likeItem(this.props.id)).then(() => {
      this.setState({
        liking: false
      });
    });

  },

  onDislike() {
    this.setState({
      disliking: true
    });

    this.props.dispatch(dislikeItem(this.props.id)).then(() => {
      this.setState({
        disliking: false
      });
    });

  },

  onRank(rank) {

    this.setState({
      ranking: true
    });

    this.props.dispatch(rankItem(this.props.id, rank)).then(() => {
      this.setState({
        ranking: false
      });
    });

  },

  onItemClick() {

    const itemUserRecap = {
      component: ItemUserRecap,
      title: this.props.name,
      passProps: this.props,
      barTintColor: '#4A001F',
      titleTextColor: 'white',
      tintColor: 'white',

      onLeftButtonPress: () => this.props.navigator.pop()
    };

    this.props.navigator.push(itemUserRecap);

  },

	render() {


    var renderLikeButton = () => {
      if(!this.state.liking && !this.props.liked ) {
        return (
          <TouchableOpacity onPress={this.onLike}>
            <Icon name="thumbs-o-up" size={20} color='green' />
          </TouchableOpacity>
        )
      } else {
        return (
            <Icon name="thumbs-up" size={20} color='green' />
        )
      }
    }

    var renderDislikeButton = () => {
      if(!this.state.disliking && !this.props.disliked) {
        return (
          <TouchableOpacity onPress={this.onDislike}>
            <Icon name="thumbs-o-down" size={20} color='red' />
          </TouchableOpacity>
        )
      } else {
        return (
            <Icon name="thumbs-down" size={20} color='red' />
        )
      }
    }

    var renderStar = (rank) => {
      if(this.props.rank >= rank) {
          return (
            <TouchableOpacity onPress={() => { this.onRank(rank) }}>
             <Icon name="star" size={20} color='#fae500' />
            </TouchableOpacity>
          )
      } else { 
        return (
          <TouchableOpacity onPress={() => { this.onRank(rank) }}>
           <Icon name="star-o" size={20} color='#fae500' />
          </TouchableOpacity>  
        ) 
      }
    }

    var renderRank = () => {

      if(!this.state.ranking) {

        return (
          <View style={styles.starsContainer}>
            {renderStar(1)}
            {renderStar(2)}
            {renderStar(3)}
            {renderStar(4)}
            {renderStar(5)}
          </View>
        )

      } else {

        return (
          <Text style={{paddingLeft: 20}}>
            ...
          </Text>
        )

      }

    }


        

		return(
      <TouchableOpacity onPress={this.onItemClick}>
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

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                {renderRank()}
              </View>
              
              <View style={styles.starsContainer}>
                <View>
                  {renderDislikeButton()}
                </View>

                <View style={{paddingLeft: 6}}>
                  {renderLikeButton()}
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
		)
	}
}));


var ItemList = React.createClass({

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
    this.props.dispatch(getAllItems).then(() => {
        this.props.navigator.push(nextRoute);
    });
  },


  onRefresh() {
    this.setState({
      refreshing: true
    });

    this.props.dispatch(getItems).then(() => {
      this.setState({
        refreshing: false
      });
    });
  },

 

  render() {

    const allItemList = {
      component: AllItemList,
      title: 'Indietro',
      navigationBarHidden: true,
      passProps: {navigator: this.props.navigator}
    };
  	

  	var renderItems = (items) => {
  		return items.map((item) => {
        console.log(item);
  			return (
  				<Item key={uuid.v4()} 
                name={item.item.name} 
                desc={item.item.desc}
                fullDesc={item.item.fullDesc}
                price={item.item.price}
                typology={item.item.typology.name}
                producer={item.item.producer.name}
                nationality={item.item.nationality.name}
                region={item.item.region.name}
                smell={item.item.smell.name}
                taste={item.item.taste.name}
                view={item.item.view.name}
                vine={item.item.vine.name}
                img={item.item.img}
                id={item.item._id}
                gradation={item.item.gradation}
                year={item.item.year}
                rank={item.rank}
                liked={item.liked}
                disliked={item.disliked}
                navigator={this.props.navigator}/>
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
          			I tuoi acquisti
          		</Text>
          <TouchableOpacity>
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
          {renderItems(this.props.items)}
      	</ScrollView>

        <View style={styles.containerBar}>
          <View style={styles.linkContainer}>
            <TouchableOpacity >
              <Ionicons name="ios-wine" size={30} color='#4A001F' />
            </TouchableOpacity>
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => this._handleNextPress(allItemList)}>
            <Icon name="square-o" size={28} color='#4A001F'/>
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
		items: state.items
	}
}


module.exports = connect(mapStateToProps)(ItemList);