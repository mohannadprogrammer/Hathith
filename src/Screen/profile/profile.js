import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import Header from '../../Components/Header/Header'
import colors from '../../Assets/colors'

import I18n from 'react-native-i18n'
const io = I18n.currentLocale()

export default class Profile extends Component {

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
                        <View style={{ height: 40, width: 40, borderRadius: 40, backgroundColor: colors.gray, position: 'absolute', right: 20, bottom: 0 }}>

                        </View>

                    </View>

                    <View style={styles.info}>
                        <TextInput
                            placeholder=" الاسم الاول"
                            placeholderTextColor={colors.main}
                            style={{ height: 40, borderColor: 'gray', width: '100%' }}

                        />
                    </View>

                    <View style={styles.info}>
                        <TextInput
                            placeholder=" الاسم الثاني "
                            placeholderTextColor={colors.main}
                            style={{ height: 40, borderColor: 'gray', width: '100%' }}

                        />
                    </View>
                    <View style={styles.submit} >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('main')}
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
