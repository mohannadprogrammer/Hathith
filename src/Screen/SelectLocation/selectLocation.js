import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Header from '../../Components/Header/Header'
// import { Icon } from 'native-base'
export default class SelectLocation extends Component {
    state = {
        patiente: {
            latitude: 15.683066,
            longitude: 32.483437,
            latitudeDelta: .015,
            longitudeDelta: 0.005,
        },
        location: null
    }
    render() {
        return (
            <View>
                <Header name="تحديد الموقع" />

                <MapView
                    style={{
                        height: Dimensions.get("screen").height - 100,
                        // width: "100%",
                        // flex: 1
                        // position: ""
                    }}
                    onPress={(coordinate) => {
                        // let newloc = this.state.location
                        // newloc.push(coordinate.nativeEvent.coordinate);
                        // this.props.setData({
                        //     "lat": coordinate.nativeEvent.coordinate.latitude,
                        //     "lng": coordinate.nativeEvent.coordinate.longitude,
                        // });
                        console.log(coordinate.nativeEvent.coordinate)
                        // alert(coordinate.nativeEvent.coordinate)
                        this.setState({
                            location: coordinate.nativeEvent.coordinate
                        }
                        )

                        // setTimeout(() => {
                        //     this.props.navigation.navigate("chart")
                        // }, 2000)

                    }}
                    provider={PROVIDER_GOOGLE}
                    region={this.state.patiente}
                >
                    {this.state.location === null ?
                        null :
                        <Marker
                            coordinate={this.state.location}

                        ></Marker>
                    }


                </MapView>



                <View style={{
                    position: "absolute",
                    // flex: 1,
                    // flexDirection: 'row',
                    width: "100%",
                    // height: "30%",
                    backgroundColor: "#FFF",
                    bottom: 10,
                    padding: 20,
                }}>
                    <TextInput style={{
                        borderWidth: 2,
                        borderRadius: 20,
                        borderColor: colors.main
                    }}
                        placeholder="رقم|البناية|المعالم الواضحة"

                    />
                    <TouchableOpacity style={styles.detailsButton}
                        onPress={() => {
                            this.props.navigation.navigate("Bill")
                        }}
                    >


                        {/* <Icon name="checklist" type="Octicons" style={{ color: colors.white, paddingher: 10 }} /> */}
                        <Text style={styles.text}>تحديد</Text>

                    </TouchableOpacity>


                </View>
            </View >
        )
    }
}
// const colors = require('../../Assets/colors')
import colors from '../../Assets/colors'

const styles = StyleSheet.create({
    detailsButton: {
        // flex: 1,
        height: 40,
        width: "100%",
        position: "relative",
        // top: 40,
        // left: 10,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "row",
        // padding: 10,
        marginTop: 25,
        backgroundColor: colors.main,
        borderRadius: 14,
        // opacity: 0.7
    },
    text: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        opacity: 1,
        fontSize: 16,
    }
})
