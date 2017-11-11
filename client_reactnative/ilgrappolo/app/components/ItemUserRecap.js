import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import {unauthUser, getItems, getAllItems, likeItem, dislikeItem, rankItem} from '../actions';


var Description = React.createClass({

	render() {
		return (

			<View style={styles.container}>
		      <ScrollView>
		      	
		        <View style={styles.itemTextContainer}>
		        	<Text style={styles.itemTextTitle}>
		        		Descrizione: 
		        	</Text>
		        </View>
		        <View style={styles.itemTextContainer}>
		        	<View>
			        	<Text style={styles.descText}>
			        		{this.props.desc + '\\n' + this.props.fullDesc}
			        	</Text>
			        	
			        </View>
		        </View>

		      </ScrollView>
		    </View>

		)
	}


})



var ItemUserRecap = connect()(React.createClass({
  getInitialState() {
    return {
      liking: false,
      disliking: false,
      ranking: false,
      rank: this.props.rank,
      disliked: this.props.disliked,
      liked: this.props.liked
    }
  },

  

  onLike() {
    this.setState({
      liking: true
    });

    this.props.dispatch(likeItem(this.props.id)).then(() => {
      this.setState({
        liking: false,
        liked: true,
        dislike: false
      });
    });

  },

  onDislike() {
    this.setState({
      disliking: true
    });

    this.props.dispatch(dislikeItem(this.props.id)).then(() => {
      this.setState({
        disliking: false,
        disliked: true,
        liked: false
      });
    });

  },

  onRank(rank) {

    this.setState({
      ranking: true
    });

    this.props.dispatch(rankItem(this.props.id, rank)).then(() => {
      this.setState({
        ranking: false,
        rank: rank
      });
    });

  },

  onDesc() {

    const desc = {
      component: Description,
      title: this.props.name + ' - ' + this.props.producer,
      passProps: {desc: this.props.desc, fullDesc: this.props.fullDesc},
      barTintColor: '#4A001F',
      titleTextColor: 'white',
      tintColor: 'white',

      onLeftButtonPress: () => this.props.navigator.pop()
    };

    this.props.navigator.push(desc);

  },

  render() {
  	var renderLikeButton = () => {
      if(!this.state.liking && !this.state.liked ) {
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
      if(!this.state.disliking && !this.state.disliked) {
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
      if(this.state.rank >= rank) {
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
          <Text style={{margin: 15}}>
            ...
          </Text>
        )

      }

    }

    return (
      <View style={styles.container}>
	      <ScrollView>
	      	<View style={styles.imgContainer}>
	      		<View style={styles.imgContainerInfo}>
		      		<Image
			            style={styles.itemImg}
			            source={{uri: this.props.img}}
			          />

			        <Text style={styles.voteText}>
			        	Vota:
			        </Text>
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

		            <Text style={styles.voteText}>
			        	Prezzo:
			        </Text>
			        <Text style={styles.priceText}>
			        	€ {this.props.price}
			        </Text>

			        <Text style={styles.voteText}>
			        	Gusto:
			        </Text>
			        <Text style={styles.priceText}>
			        	{this.props.taste}
			        </Text>

			        <Text style={styles.voteText}>
			        	Olfatto:
			        </Text>
			        <Text style={styles.priceText}>
			        	{this.props.smell}
			        </Text>

			        <Text style={styles.voteText}>
			        	Vista:
			        </Text>
			        <Text style={styles.priceText}>
			        	{this.props.view}
			        </Text>
	      		</View>
		        <View style={styles.imgContainerDesc}>
		        	<View style={styles.itemTextContainer}>
			        	<Text style={styles.itemTextTitle}>
			        		Nome: 
			        	</Text>
			        	<Text style={styles.itemText}>
			        		{this.props.name} 
			        	</Text>
			        </View>

			        <View style={styles.itemTextContainer}>
			        	<Text style={styles.itemTextTitle}>
			        		Produttore: 
			        	</Text>
			        	<Text style={styles.itemText}>
			        		{this.props.producer} 
			        	</Text>
			        </View>

			        <View style={styles.itemTextContainer}>
			        	<Text style={styles.itemTextTitle}>
			        		Tipologia: 
			        	</Text>
			        	<Text style={styles.itemText}>
			        		{this.props.typology} 
			        	</Text>
			        </View>

			        <View style={styles.itemTextContainer}>
			        	<Text style={styles.itemTextTitle}>
			        		Gradazione: 
			        	</Text>
			        	<Text style={styles.itemText}>
			        		{this.props.gradation} % 
			        	</Text>
			        </View>

			        <View style={styles.itemTextContainer}>
			        	<Text style={styles.itemTextTitle}>
			        		Vitigno: 
			        	</Text>
			        	<Text style={styles.itemText}>
			        		{this.props.vine} 
			        	</Text>
			        </View>

			        <View style={styles.itemTextContainer}>
			        	<Text style={styles.itemTextTitle}>
			        		Anno: 
			        	</Text>
			        	<Text style={styles.itemText}>
			        		{this.props.year} 
			        	</Text>
			        </View>

			        <View style={styles.itemTextContainer}>
			        	<Text style={styles.itemTextTitle}>
			        		Nazionalità: 
			        	</Text>
			        	<Text style={styles.itemText}>
			        		{this.props.nationality} 
			        	</Text>
			        </View>

			        <View style={styles.itemTextContainer}>
			        	<Text style={styles.itemTextTitle}>
			        		Regione: 
			        	</Text>
			        	<Text style={styles.itemText}>
			        		{this.props.region} 
			        	</Text>
			        </View>

			        <View style={styles.itemTextContainer}>
			        	<Text style={styles.itemTextTitle}>
			        		Descrizione: 
			        	</Text>
			        </View>
			        <View style={styles.itemTextContainer}>
			        	<View>
			        		<TouchableOpacity onPress={this.onDesc}>
				        		<Text style={styles.linkText}>
					        		Leggi tutto
					        	</Text>
				        	</TouchableOpacity>
				        	<Text style={styles.descText}>
				        		{this.props.desc.substr(0,390)}... 
				        	</Text>
				        	
				        </View>
			        </View>


		        </View>
	      	</View>
	      </ScrollView>
      </View>
    );
  }

}));



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    marginTop: -60  
  },
  imgContainer: {
  	flexDirection: 'row',
  	flex: 1
  },
  itemImg: {
  	width: 100,
  	height: 300,
  	marginLeft: 8
  },
  imgContainerDesc: {
  	flexDirection: 'column',
  	marginTop: 40,
  	marginRight: 25,
  	flex: 1
  },
  itemTextTitle: {
    fontFamily: 'Baskerville',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 4
  },
  itemText: {
    fontFamily: 'Baskerville',
    fontSize: 20,
    marginLeft: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 0.95
  },
  descText: {
    fontFamily: 'Baskerville',
    fontSize: 18,
    marginLeft: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 0.98
  },
  linkText: {
    fontFamily: 'Baskerville',
    fontSize: 14,
    marginLeft: 2,
    marginTop: -10,
    paddingBottom: 0,
    color: 'blue',
    fontStyle: 'italic' 
  },
  itemTextContainer: {
  	flexDirection: 'row',
  	marginBottom: 7,
  	paddingLeft: 10,
  },
  imgContainerInfo: {
  	flexDirection: 'column',
  	flex: 0.5
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    marginBottom: -10
  },
  voteText: {
  	fontFamily: 'Baskerville',
  	paddingLeft: 10, 
  	marginBottom: -8, 
  	marginTop: 10, 
	fontWeight: 'bold',
	fontSize: 15
  },
  priceText: {
  	fontFamily: 'Baskerville',
  	marginTop: 12,
  	paddingLeft: 10,
  	fontSize: 18
  }
});


module.exports = ItemUserRecap;