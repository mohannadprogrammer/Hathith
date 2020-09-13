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
          <View>
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
                  space={20}
                  size={30}
                  activeColor={colors.orange}
                  inactiveColor={colors.gray}
                  codeLength={4}
                  inputPosition='center'
                  onFulfill={(code) => { alert("successfull") }}
                />
              </View>
              <Text style={{ color: colors.orange, textAlign: "center", alignSelf: "center" }}>يمكنك ارسال بعد  1:59</Text>

            </View>
            <View style={styles.submit} >
              <TouchableOpacity
                onPress={() => navigation.navigate('main')}
                style={styles.botton}
              >

                <Text style={{ color: "#FFFF", fontSize: 24 }}>تأكيد</Text>
              </TouchableOpacity>

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

export default Verification