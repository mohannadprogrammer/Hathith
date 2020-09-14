import React from 'react';
import {  StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

import Carousel from '../../Components/Carousel/Carousel'
import { dummyData } from '../../../data/data'
import {CATEGORIES} from '../../../data/dummy-data'

const renderGridItem = itemData => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

  export default class Mainpage extends React.Component {
    
   
  render() {
   
  
    const { navigation } = this.props
    return (

      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Carousel data={dummyData} />


        </View>
     
        <View style={{ flex: 1 }}>
          <Text style={styles.cardtitle}>المتاجر الاقرب</Text>
          <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
        {/* <TouchableOpacity style={card}> 
        <Image style={cardItem} source={{uri: 'https://cdn.pixabay.com/photo/2019/10/29/20/39/delta-4588091_960_720.jpg'}}/>
          <Text style={cardText}>title</Text>
        </TouchableOpacity> */}
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    // backgroundColor: 'blue'
  },
  slide: {
    flex: 1,
    backgroundColor: 'red'
  },
  cardtitle: {
    fontSize: 22,
    color: '#CD853F'
  },
  cardText: {
    fontSize: 30,
    padding: 10
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft :'2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }

  },
  cardItem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});
