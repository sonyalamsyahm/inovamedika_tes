import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
// import {users} from '../../configurations/storage';

const Home = props => {
  let data = props.navigation.getParam('newData');
  return (
    <LinearGradient
      style={styles.gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[
        'rgba(100, 217, 50, 0.8)',
        'rgba(100, 217, 50, 0.3)',
        'rgb(100, 217, 50)',
      ]}>
      <View style={{flex: 1}}>
        <Profile email={data.email} />
        <ActionButton
          name="Daftar berobat untuk pasien"
          action={() => props.navigation.navigate('Form', {data})}
        />
        <ActionButton name="Informasi Pasien" />
        <ActionButton
          name="Log Out"
          action={() => props.navigation.navigate('Public')}
        />
      </View>
    </LinearGradient>
  );
};

const Profile = props => {
  return (
    <View style={styles.container}>
      <Icon name="account-circle" color="silver" size={120} />
      <Text style={styles.text}>{props.email}</Text>
    </View>
  );
};

const ActionButton = props => {
  return (
    <View style={styles.btn}>
      <Button
        title={props.name}
        buttonStyle={styles.btnStyle}
        icon={<Icon name="chevron-right" size={25} />}
        iconRight={true}
        titleStyle={styles.titleBtnStyle}
        onPress={props.action}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    backgroundColor: 'rgba(63, 161, 35, 0.8)',
    alignItems: 'center',
    height: Dimensions.get('window').height / 3,
    justifyContent: 'center',
    marginTop: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  btn: {
    marginHorizontal: 5,
    marginTop: 10,
  },
  btnStyle: {
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(63, 161, 35, 0.8)',
  },
  titleBtnStyle: {
    fontFamily: 'Bold',
    fontSize: 16,
    paddingLeft: 10,
  },
  text: {
    marginTop: 5,
    fontFamily: 'Bold',
    fontSize: 18,
    color: 'white',
  },
});

export default Home;
