import React, { Component } from 'react';
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import LoginHOC from '../../HOC/LoginHOC/LoginHoc'
class Login extends Component {
    render() {

        // const [value, onChangeText] = React.useState('ادخل رقم الجوال');
        const { navigation } = this.props
        return (
            <LoginHOC
                step={1}
                footer={() => (
                    <View>
                        <View style={styles.footer}>
                            <Text style={styles.title}>تسجيل الدخول</Text>
                            <TextInput
                                style={{
                                    width: "100%",
                                    borderColor: colors.light_gray,
                                    borderWidth: 1,

                                }}
                            // onChangeText={text => onChangeText(text)}
                            // value={"value"}

                            />
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('Check')}>
                                <Text style={styles.title}>تخطي</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.submit} >
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Check')}
                                style={styles.botton}
                            >

                                <Text style={{ color: "#FFFF", fontSize: 24 }}>تأكيد</Text>
                            </TouchableOpacity>
                            <View
                                style={styles.line}
                            >

                            </View>
                            <View>
                                <Text style={{ textAlign: "center", color: colors.orange, fontSize: 12 }}>استخدامك لهاذا التطبيق يعني موافقتك على سياسة و شروط الاستخدام</Text>
                            </View>
                        </View>
                    </View>

                )}

            // submit={() => (

            // )}
            >

            </LoginHOC>



        )
    }
}
import colors from '../../Assets/colors'
const styles = StyleSheet.create({

    footer: {
        padding: 20,
    },
    title: {
        paddingBottom: 16,
        paddingTop: 16,
        fontSize: 16,
        color: colors.orange

    },
    submit: {
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
        backgroundColor: colors.orange,
        padding: 20,
        borderRadius: 10
    },
    line: {
        width: "80%",
        height: 3,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: colors.gray
    }


})

export default Login