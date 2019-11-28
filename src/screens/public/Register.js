import React from 'react';
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

const Register = props => {
  // console.log(props.navigation.navigate('Login'));
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
          <Form press={() => props.navigation.navigate('Login')} />
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
        <Text style={styles.title}>Register</Text>
      </View>
      <StaticText label="Email" icon="email" />
      <TextInput style={styles.input} placeholder="example@gmail.com" />
      <StaticText label="New Password" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="password"
      />
      <StaticText label="Reinput Password" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="re-password"
      />
      <Button title="Register" buttonStyle={styles.button} />
      <Choose press={props.press} />
    </View>
  );
};

const Choose = props => {
  return (
    <View style={styles.viewChoose}>
      <Text style={styles.chooseText}>Already have account?</Text>
      <TouchableOpacity onPress={props.press}>
        <Text style={[styles.chooseText, {color: 'blue'}]}> Login</Text>
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
