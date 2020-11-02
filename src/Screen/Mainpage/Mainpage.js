import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, FlatList, ImageBackground, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../../Components/Header/Header'
import Carousel from '../../Components/Carousel/Carousel'
import { dummyData } from '../../../data/data'
import OfferView from '../../Components/OfferView/offerstoreView'
import OverViewSale from '../../Components/OfferView/OverViewSale'
import colors from '../../Assets/colors';
import Icons from '../../Assets/Icons';
import { getCategoryApi, getShopOfCategoryApi } from '../../api'

export default class Mainpage extends React.Component {
  state = {
    catagory: [],
    message: [],
  }
  compoentDidAmount() {
    
    getCategoryApi(token).then((responese) => {
      this.setState({
        isLoading: false,
        catagory: response.data,
        message :"sorry no data"
      })
      
   
    }).catch((erre)=>{
    this.setState({
      message :"Network Erro"
    })
    })
  }

   
  render() {

    const catagory = this.state.catagory
    const { navigation } = this.props
    return (
      <>
        <ScrollView>
          <View style={styles.container}>

            <Header name="المتاجر"
            />
            <View style={{ flex: 1 }}>
              <Carousel
                data={[{
                  title: ' مساحات اعلانيه', url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
                  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                  id: 1

                },
                {
                  title: '2 مساحات اعلانيه', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
                  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                  id: 2
                },
                {
                  title: 'مساحات اعلانيه ', url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
                  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                  id: 3
                },
                {
                  title: 'مساحات اعلانيه ', url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
                  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                  id: 3
                }]}
              />


            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.cardtitle}>المتاجر الاقرب</Text>

              {

                this.state.isLoading ?
                  <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                  </View> :
                  (
                    this.state.catagory.length == 0 ?
                      <View style={{ flex: 1, padding: 20 }}>
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>{this.state.message}</Text>
                      </View> :
                      <View style={{
                        // flex: 1, 

                        height: 100,
                        alignItems: 'center'
                      }}>

                        <FlatList
                          data={this.state.category}
                          keyExtractor={item => item.id}
                          renderItem={({ item }) =>
                            <OfferView key={item.category.name}
                            />
                          }
                          renderItem={({ item }) =>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>{item.category.name} </Text>
                          }
                          // numColumns={2}
                          horizontal
                          showsHorizontalScrollIndicator={false}

                          style={{
                            // flex: 1,
                            height: 100

                            // backgroundColor: 'red',
                            // width:Dimensions.get('screen').width
                          }}
                          style={{ paddingRight: 44 }}
                        />


                      </View>
                  )

              }


              <SafeAreaView style={{ flex: 1, marginVertical: 22 }}>
                <Text style={styles.cardtitle2}> انواع المتاجر </Text>
                {

                  this.state.isLoading ?
                    <View style={{ flex: 1, padding: 20 }}>
                      <ActivityIndicator />
                    </View> :
                    (


                      this.state.catagory.length == 0 ?
                        <View style={{ flex: 1, padding: 20 }}>
                          <Text style={{ color: '#000', fontWeight: 'bold' }}>No stores from selected category</Text>
                        </View> :
                        <View style={{
                          // flex: 1, 

                          height: 100,
                          alignItems: 'center'
                        }}>

                          <FlatList
                            data={this.state.category}
                            keyExtractor={item => item.id}
                       
                            renderItem={({ item }) => <OverViewSale navigation={this.props.navigation} key={item.store.name} />}
                             renderItem={({ item }) =>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>{item.store.name} </Text>
                          }
                            numColumns={2}
                            scrollEnabled

                            style={{ marginVertical: 22 }}
                           
                          />

                  return (
                    <OverViewSale navigation={this.props.navigation} key={i} data={item} />
                  )
                      </View>



                    )



                }





              </SafeAreaView>
            </View>

          </View>

        </ScrollView>
        <TouchableOpacity style={{
          position: 'absolute',
          height: 40,
          width: 50,
          bottom: 0,
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: colors.main,
          justifyContent: "center",
          borderRadius: 50,
          // borderTopRightRadius: 20,
          // borderTopLeftRadius: 20
        }}
          onPress={() => {
            this.props.navigation.navigate("modal")
          }}
        >
          {Icons.Boot("#FFFF")}

        </TouchableOpacity>
      </>

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
    color: colors.main,
    paddingRight: 10
  },
  cardtitle2: {
    fontSize: 14,
    color: colors.main,
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
