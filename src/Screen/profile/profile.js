import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from 'react-native'
import Header from '../../Components/Header/Header'
import colors from '../../Assets/colors'
import { CommonActions } from '@react-navigation/native';
// import AsyncStorage from '@react-native-community/async-storage'
import AsyncStorage from '@react-native-community/async-storage'
import I18n from 'react-native-i18n'
const io = I18n.currentLocale()
import { saveTokenAndUserData } from '../../api'
import Icons from '../../Assets/Icons'
export default class Profile extends Component {
    state = {
        user: {
            lastname: "waheed",
            firstname: "sdlflsd"
        },
        token: "",
        order: 4
    }
    componentDidMount() {
        this.getUserData()
    }
    // async saveTokenAndUserData(user) {
    //     try {
    //         await AsyncStorage.setItem(
    //             'user',
    //             JSON.stringify(user)
    //         );
    //     } catch (error) {
    //         console.log(error)

    //     }
    // }

    async getUserData() {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            console.log("sdfsdfsf" + JSON.parse(jsonValue).lastname);
            const { lastname, firstname, token, ...rest } = JSON.parse(jsonValue);
            console.log(rest);

            this.setState({
                user: { lastname, firstname },
                token: token
            })
            return JSON.parse(jsonValue);
        } catch (e) {
            // error reading value
            console.log(e)
            return null

        }
    }
    async sendData() {
        console.log(this.state.user);

        await fetch("http://209.97.181.175:5000" + "/user/update",
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': "ggggg " + this.state.token

                },

                body: JSON.stringify(this.state.user)
            }).then((response) => response.json()).then(async (responseJson) => {
                let { code, message, done } = responseJson;
                console.log(responseJson)
                if (code || done) {
                    // alert("تمت العملية بي نجاح");
                    await saveTokenAndUserData(responseJson.userData);
                    Alert.alert(
                        'نجحت العملية',
                        'تم حفظ البيانات',
                        [

                            {
                                text: 'الغاء',
                                // onPress: () => this.props.navigation.navigate("login"),
                                style: 'cancel'
                            },
                            {
                                text: "فتح التطبيق",
                                onPress: () => this.props.navigation.navigate("main")
                            }
                        ],
                        { cancelable: false }
                    );

                } else {
                    // alert("لم تطابق البيانات ");
                    Alert.alert(
                        'فشل العملية',
                        'حدث خطأء في حفظ البيانات',
                        [

                            {
                                text: 'الغاء',
                                // onPress: () => this.props.navigation.navigate("login"),
                                style: 'cancel'
                            },
                            {
                                text: 'محاةله مرة اخرى',
                                style: {
                                    color: colors.main
                                }
                                // onPress: () => console.log('OK Pressed')
                            }
                        ],
                        { cancelable: false }
                    );
                }

            }).catch((error) => {
                console.log(error, ">>>>>>>>>>>>>>>>>>>")
            });

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <Header name="البروفايل"></Header> */}
                <Text
                    style={{
                        textAlign: "center",
                        padding: 15,
                        fontSize: 24,
                        color: colors.main
                    }}
                >ادخل بياناتك</Text>

                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.image}
                            source={require('../../Assets/images/ayman.jpg')}
                        />

                        <TouchableOpacity style={{
                            height: 40,
                            width: 45,
                            flex: 0,
                            padding: 10,
                            borderRadius: 40,
                            // justifyContent: "center",
                            // alignItems: "center",
                            backgroundColor: colors.blue,
                            // position: 'absolute',
                            right: -20, bottom: 16,
                            zIndex: 5,
                        }}
                            onPress={() => {
                                console.log("test bro file");

                                // this.props.navigation.navigate("Profile")
                            }}
                        >
                            <Icons.Edit size={20} color={colors.white} />
                        </TouchableOpacity>


                    </View>

                    <View style={styles.info}>
                        <TextInput
                            placeholder=" الاسم الاول"
                            placeholderTextColor={colors.main}
                            onChangeText={(text) => {
                                this.setState({
                                    user: {
                                        ...this.state.user,
                                        firstname: text
                                    }
                                })
                            }}

                            style={{ height: 40, borderColor: 'gray', width: '100%' }}
                            value={this.state.user.firstname}

                        />
                    </View>

                    <View style={styles.info}>
                        <TextInput
                            placeholder=" الاسم الثاني "
                            placeholderTextColor={colors.main}
                            style={{ height: 40, borderColor: 'gray', width: '100%' }}
                            value={this.state.user.lastname}
                            onChangeText={(text) => {
                                this.setState({
                                    user: {
                                        ...this.state.user,
                                        lastname: text
                                    }
                                })
                            }}

                        />
                    </View>
                    <View style={styles.submit} >
                        <TouchableOpacity
                            onPress={() => {
                                this.sendData();
                                // this.props.navigation.navigate('main')
                                this.props.navigation.dispatch(
                                    CommonActions.reset(
                                        {
                                            index: 1,
                                            routes: [
                                                { name: 'main' },

                                            ],
                                        }
                                    )
                                )
                            }}
                            style={styles.botton}
                        >

                            <Text style={{ color: "#FFFF", fontSize: 24 }}>تأكيد</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* </View> */}
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        backgroundColor: "#FFF",
        flex: 1,
    },
    image: {
        resizeMode: "cover",
        width: 200,
        height: 200,
        borderRadius: 600,
        borderWidth: 2,
        borderColor: colors.light_gray
    },
    info: {
        flexDirection: io === "en-US" ? "row-reverse" : "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 5,
        width: "100%",
        borderColor: colors.light_gray,
        padding: 5,
        margin: 15

    }, submit: {
        bottom: 0,
        width: "100%",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"

    },
    botton: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.main,
        padding: 20,
        borderRadius: 10
    },
})
