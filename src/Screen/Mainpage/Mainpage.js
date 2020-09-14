import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, ImageBackground, Dimensions } from 'react-native';
import Header from '../../Components/Header/Header'
import Carousel from '../../Components/Carousel/Carousel'
import { dummyData } from '../../../data/data'
import OfferView from '../../Components/OfferView/offerstoreView'
import Icons from '../../Assets/Icons';

export default class Mainpage extends React.Component {


  render() {


    const { navigation } = this.props
    return (

      <View style={styles.container}>
        <Header name="المتاجر" />
        <View style={{ flex: 1 }}>
          <Carousel data={dummyData} />


        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.cardtitle}>المتاجر الاقرب</Text>
          
          
          <View style={{ flex: 1,  alignItems: 'center'}}>
       
          <FlatList
            data={[{ tile: "alsdf", key: "3 " }, { key: "1" }, { key: "2" },{ key: "4" }]}
            renderItem={({ item, ...rest }) => <OfferView key={item.key} />}
            numColumns={2}
            // horizontal
            contentContainerStyle={{
              flix: 1,
              // backgroundColor: 'red',
              width:Dimensions.get('screen').width
                        }}
            style={{  paddingRight:44 }}
          />
          
          
          </View>
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
    fontSize: 14,
    color: '#CD853F',
    paddingRight: 10
  },
  cardText: {
    fontSize: 30,
    padding: 10
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

});
