import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'
import LoginHOC from '../../HOC/LoginHOC/LoginHoc'
class Verification extends Component {

  constructor(props) {
    super(props);
    this.state = {
        enterCode: false,
        OTP: '',
        phone: '',
        isLoading: false,
    };

    this._textInput = React.createRef();
}

 API = {
 
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
};

_getCode = () => {
  // Todo : check if valid number

  this.setState({isLoading: true});

  setTimeout(async () => {
      try {

          let phone = this._textInput._lastNativeText;
          let sent = false;

          await fetch('192.168.40.41:5000/user/login', {
              method: 'POST',
              headers: API.headers,
              body: JSON.stringify({
                  phone: phone,
                 
              }),
          }).then(
              (response) => {
                  if (response.status === 200) {
                      return response.json();
                  } else if (response.status === 404) {
                      throw Error('Phone number doesn\'t exists');
                  } else {
                      throw Error('Can\'t reach the server.');
                  }
              },
          ).then((responseJson) => {
              if (responseJson && responseJson.sent) {
                  sent = responseJson.sent;
              } else {
                  throw Error('Can\'t send code.');
              }
          }).catch(error => {
              console.log('Catch error : ', error);
              throw error;
          });


          this.setState({
              spinner: false,
              enterCode: true,
              verification: sent,
              phone: phone,
          });

          this._textInput.setNativeProps({text: ''});

          setTimeout(() => {
              Alert.alert(Strings.Sent, Strings.CodeSent, [{
                  text: 'OK',
                  onPress: () => this._textInput.focus(),
              }]);
          }, 100);

      } catch (error) {
          this.setState({spinner: false});
          setTimeout(() => {
              Alert.alert('Oops!', error.message);
          }, 100);
      }

  }, 100);

};

_verifyCode = () => {

  this.setState({isLoading: true});

  setTimeout(async () => {

      try {

         
          let phone = this.state.phoneNumber;
          let code = this._textInput._lastNativeText;

          await fetch('192.168.40.41:5000/user/login', {
              method: 'POST',
              headers: API.headers,
              body: JSON.stringify({
                  phone: phone,
                  code: code,
              }),
          }).then(
              (response) => {
                  if (response.status === 200) {
                      return response.json();
                  } else if (response.status === 404) {
                      throw Error('Wrong code');
                  } else {
                      throw Error('Can\'t reach the server.');
                  }
              },
          ).then((responseJson) => {
              if (responseJson && responseJson.verified) {
                  console.log('Phone verified.');
              } else {
                  throw Error('Can\'t check the code, try to resend it again.');
              }
          }).catch(error => {
              console.log('Catch error :', error);
              throw error;
          });

          this._textInput.blur();
          this.setState({isLoading: false});
          setTimeout(() => {
              Alert.alert(Strings.Success, Strings.SuccessfullyVerifiedPhoneNumber);
              this.props.navigation.navigate('main');

          }, 100);

      } catch (error) {
          this.setState({spinner: false});
          setTimeout(() => {
              Alert.alert('Oops!', error.message);
          }, 100);
      }

  }, 100);

};

_onChangeText = (val) => {
  if (!this.state.enterCode) {
      return;
  }
  if (val.length === MAX_LENGTH_CODE) {
      this._verifyCode();
  }
};

_tryAgain = () => {
  this._textInput.setNativeProps({text: ''});
  this._textInput.focus();
  this.setState({enterCode: false});
};

_getSubmitAction = () => {
  this.state.enterCode ? this._verifyCode() : this._getCode();
};

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
                  onSubmitEditing={this._getSubmitAction}/>
                />
              </View>
              <Text style={{ color: colors.orange, textAlign: "center", alignSelf: "center" }}>يمكنك ارسال بعد  1:59</Text>

            </View>
            <View style={styles.submit} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={styles.botton}
              >

                <Text style={{ color: "#FFFF", fontSize: 24 }}
                onPress={this._getSubmitAction} 
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