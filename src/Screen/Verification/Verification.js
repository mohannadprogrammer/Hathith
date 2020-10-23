import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, TextInput, Button } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import CodeInput from 'react-native-confirmation-code-input'
import AsyncStorage from '@react-native-community/async-storage';
import LoginHOC from '../../HOC/LoginHOC/LoginHoc'
import { LoginConfiramtion } from '../../api'
class Verification extends Component {
  state = {
    loading: false
  }
  constructor(props) {
    super(props);


  }
  async saveTokenAndUserData(user) {
    try {
      await AsyncStorage.setItem(
        'user',
        JSON.stringify(user)
      );
    } catch (error) {
      console.log(error)

    }
  }
  async sendData() {
    console.log("slkdlf")
    this.setState({
      loading: true
    })

    await fetch("http://209.97.181.175:5000" + "/user/login",
      {
        method: 'POST',
        headers:
        {
          'Content-Type': 'application/json'

        },

        body: JSON.stringify(this.state)
      }).then((response) => response.json()).then(async (responseJson) => {
        let { code, message } = responseJson;
        console.log(responseJson)

        if (code || code == 1) {
          await this.saveTokenAndUserData(responseJson.userData);
          this.setState({
            loading: false
          })
          // this.props.navigation.navigate("Profile")
          this.props.navigation.dispatch(
            CommonActions.reset(
              {
                index: 1,
                routes: [
                  { name: 'Profile' },

                ],
              }
            )
          )

          // Alert.alert(
          //   'نجحت العملية',
          //   'تم يتطابق رقم التاكيد',
          //   [

          //     {
          //       text: 'الغاء',
          //       onPress: () => this.props.navigation.navigate("login"),
          //       style: 'cancel'
          //     },
          //     {
          //       text: "فتح التطبيق",
          //       onPress: () => this.props.navigation.navigate("Profile")
          //     }
          //   ],
          //   { cancelable: false }
          // );

        } else {
          this.setState({
            loading: false
          })
          Alert.alert(
            'فشل العملية',
            'لم يتطابق رقم التاكيد',
            [

              {
                text: 'الغاء',
                onPress: () => this.props.navigation.navigate("login"),
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
        this.setState({
          loading: false
        })
        console.log(error, ">>>>>>>>>>>>>>>>>>>")
      });

  }
  _onFulfill(code) {
    // console.log(code);
    this.setState({

      OTP: code,
      phone: this.props.route.params.phone,
    })
  }
  render() {

    const { navigation } = this.props
    console.log(this.props.route.params.phone);
    return (
      <LoginHOC
        step={2}
        loading={this.state.loading}
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
                  activeColor={colors.main}
                  inactiveColor={colors.gray}
                  codeLength={4}
                  inputPosition='center'
                  onFulfill={(code) => {
                    // alert(code)
                    this._onFulfill(code)
                  }}
                // onSubmitEditing={
                // this._getSubmitAction
                // }
                />

              </View>
              <Text style={{ color: colors.main, textAlign: "center", alignSelf: "center" }}>يمكنك ارسال بعد   1:59 تحلقق الرسائل في رقمك {this.props.route.params.phone}</Text>

            </View>
            <View style={styles.submit} >
              <TouchableOpacity
                onPress={() => {
                  console.log(this.state)
                  this.sendData();
                  // navigation.navigate('Profile')
                }}
                style={styles.botton}
              >

                <Text style={{ color: "#FFFF", fontSize: 24 }}
                // onPress={
                // this._getSubmitAction
                // }
                >تأكيد</Text>
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
    color: colors.main

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
    backgroundColor: colors.main,
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