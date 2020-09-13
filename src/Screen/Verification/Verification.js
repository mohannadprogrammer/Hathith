import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'
import LoginHOC from '../../HOC/LoginHOC/LoginHoc'
class Verification extends Component {
  render() {

    // const [value, onChangeText] = React.useState('ادخل رقم الجوال');
    const { navigation } = this.props
    return (
      <LoginHOC
        step={2}
        footer={() => (
          <View style={styles.footer}>
            <Text style={styles.title}>ادخل رقم التحقق</Text>
            <View
              style={
                {
                  justifyContent: "center",
                  alignSelf: "center",
                  // backgroundColor: "red",
                  height: 100
                }
              }
            >
              <CodeInput
                // ref="codeInputRef1"
                secureTextEntry
                className={'border-b'}
                space={10}
                size={30}
                activeColor={colors.orange}
                inactiveColor={colors.gray}
                inputPosition='center'
                onFulfill={(code) => { alert("successfull") }}
              />
            </View>
            <Text style={{ color: colors.orange, textAlign: "center", alignSelf: "center" }}>يمكنك ارسال بعد  1:59</Text>

          </View>
        )}

        submit={() => (
          <View style={styles.submit} >
            <TouchableOpacity
              onPress={() => navigation.navigate('Check')}
              style={styles.botton}
            >

              <Text style={{ color: "#FFFF", fontSize: 24 }}>تأكيد</Text>
            </TouchableOpacity>

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
    // flex: 1,
    padding: 20,
    alignItems: 'flex-end'
  },
  title: {
    paddingBottom: 16,
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
    padding: 10,
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

export default Verification