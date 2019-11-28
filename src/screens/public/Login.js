import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Register = props => {
  const [username, setUsername] = useState('');
  const [password, setPasswod] = useState('');

  return (
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[
        'rgba(100, 217, 50, 0.8)',
        'rgba(100, 217, 50, 0.3)',
        'rgb(100, 217, 50)',
      ]}>
      <View style={styles.container}>
        <View
          style={{flex: 10, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Logo />
          <Form
            users={text => setUsername(text)}
            pass={text => setPasswod(text)}
            press={() => props.navigation.navigate('Register')}
            pressed={() => {
              Axios.post(`http://192.168.1.6:3000/api/login`, {
                username,
                password,
              })
                .then(async res => {
                  let newData = {
                    user: res.data.userid,
                    email: res.data.email,
                    token: res.data.token,
                  };
                  await AsyncStorage.setItem('user', JSON.stringify(newData));
                  // const datas = await AsyncStorage.getItem('user');
                  // console.log(datas);
                  return props.navigation.navigate('Home', {newData});
                })
                .catch(error => {
                  console.log(error);
                  alert('Username or password is wrong');
                });
            }}
          />
        </View>
        <View style={{flex: 1}} />
      </View>
    </LinearGradient>
  );
};

const Logo = () => {
  return (
    <Image
      source={require('../../../assets/images/Logo.png')}
      style={{width: 250}}
    />
  );
};

const Form = props => {
  return (
    <View style={styles.form}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <StaticText label="Username" icon="email" />
      <TextInput
        style={styles.input}
        placeholder="exampleUser"
        onChangeText={props.users}
      />
      <StaticText label="Password" />
      <TextInput
        onChangeText={props.pass}
        style={styles.input}
        secureTextEntry={true}
        placeholder="password"
      />
      <Button
        title="Login"
        buttonStyle={styles.button}
        onPress={props.pressed}
      />
      <Choose press={props.press} />
    </View>
  );
};

const Choose = props => {
  return (
    <View style={styles.viewChoose}>
      <Text style={styles.chooseText}>Not have an account?</Text>
      <TouchableOpacity onPress={props.press}>
        <Text style={[styles.chooseText, {color: 'blue'}]}> Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const StaticText = props => {
  return (
    <View>
      <Text style={styles.text}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(149, 232, 165, 1)',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width - 30,
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: 'Bold',
  },
  text: {
    fontSize: 18,
    marginBottom: 2,
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'Bold',
  },
  viewTitle: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Bold',
  },
  form: {
    paddingVertical: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 10,
  },
  chooseText: {
    fontSize: 15,
    fontFamily: 'Bold',
  },
  viewChoose: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
});

export default Register;
