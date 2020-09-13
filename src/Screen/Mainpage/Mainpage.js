import React, { Component } from 'react';
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import MainpageHOC from '../../HOC/MainpageHoc/Mainpage'
class Mainpage extends Component {
    render() {

        // const [value, onChangeText] = React.useState('ادخل رقم الجوال');
        const { navigation } = this.props
        return (
            <LoginHOC
                step={1}
                footer={() => (
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
                )}

                submit={() => (
                    <View style={styles.submit} >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Check')}
                            style={styles.botton}
                        >

                            <Text style={{ color: "#FFFF", fontSize: 12}}>تأكيد</Text>
                        </TouchableOpacity>
                        <View
                            style={styles.line}
                        >

                        </View>
                        <View>
                            <Text style={{ textAlign: "center", color: colors.orange, fontSize: 12 }}>استخدامك لهاذا التطبيق يعني موافقتك على سياسة و شروط الاستخدام</Text>
                        </View>
                    </View>
                )}
            >

            </LoginHOC>



        )
    }
}
import colors from '../../Assets/colors'
const styles = StyleSheet.create({

    footer: {
        flex: 1,
        padding: 20,
        alignItems: 'flex-end'
    },
    title: {
        paddingBottom: 5,
        paddingTop: 16,
        fontSize: 22,
        color: colors.orange

    },
    submit: {
        flex: 1,
        position: "absolute",
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
        padding: 5,
        borderRadius: 10
    },
    line: {
        flex: 1,
        width: "80%",
        height: 3,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: colors.gray
    }


})

export default Mainpage