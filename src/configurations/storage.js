import AsyncStorage from '@react-native-community/async-storage';

export const users = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    return value;
  } catch (e) {
    console.log(e);
  }
};
