import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';
import Header from '../../Components/Header/Header'
import Carousel from '../../Components/Carousel/Carousel'
import { dummyData } from '../../../data/data'
import OfferView from '../../Components/OfferView/offerstoreView'
import OverViewSale from '../../Components/OfferView/OverViewSale'
import colors from '../../Assets/colors';
import Icons from '../../Assets/Icons';


export default class Mainpage extends React.Component {


  render() {
    const catagory = [
      { tile: "alsdf", key: "3 ", name: "المطاعم", image: "https://cdn.pixabay.com/photo/2017/08/02/13/10/drink-2571544_960_720.jpg" },
      { key: "1", name: "الصيدليات", image: "https://cdn.pixabay.com/photo/2017/08/02/13/10/drink-2571544_960_720.jpg" },
      { key: "2", name: "سوبر ماركت", image: "https://cdn.pixabay.com/photo/2017/08/02/13/10/drink-2571544_960_720.jpg" },
      { key: "4", name: "ادوات كهربائية", image: "https://cdn.pixabay.com/photo/2017/08/02/13/10/drink-2571544_960_720.jpg" },
    ]


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


              <View style={{
                // flex: 1, 

                height: 100,
                alignItems: 'center'
              }}>

                <FlatList
                  data={[{ tile: "alsdf", key: "3 " }, { key: "1" }, { key: "2" }, { key: "4" }]}
                  renderItem={({ item, ...rest }) => <OfferView key={item.key} />}
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
              <SafeAreaView style={{ flex: 1, marginVertical: 22 }}>
                <Text style={styles.cardtitle2}> انواع المتاجر </Text>
                {/* <FlatList
                  data={[{ tile: "alsdf", key: "3 " }, { key: "1" }, { key: "2" }, { key: "4" }]}
                  renderItem={({ item, ...rest }) => <OverViewSale navigation={this.props.navigation} key={item.key} />}
                  numColumns={2}
                  scrollEnabled

                  style={{ marginVertical: 22 }}
                /> */}

                {catagory.map((item, i) => {
                  console.log(item);

                  return (
                    <OverViewSale navigation={this.props.navigation} key={i} data={item} />
                  )
                })}
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
