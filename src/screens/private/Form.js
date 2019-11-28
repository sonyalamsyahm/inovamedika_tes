import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Picker,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Input} from 'react-native-elements';
import Axios from 'axios';

const Form = props => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [values, setValues] = useState([1, 1, 1, 1, 1, 1, 1]);
  const [name, setName] = useState('');
  const [alamat, setAlamat] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kodya, setKodya] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [umur, setUmur] = useState('');
  const [telepon, setTelepon] = useState('');
  const [pekerjaan, setPekerjaan] = useState('');
  const [penanggungjawab, setPN] = useState('');

  let data = props.navigation.getParam('data');

  const setUpDate = (event, date) => {
    date = date;
    setShowDate(Platform.OS === 'ios' ? true : false);
    setDate(date);
  };
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
      <ScrollView>
        <View style={styles.form}>
          <Label label="Nama" />
          <Inputs textIn={text => setName(text)} />
          <Label label="Alamat Pasien" />
          <Inputs textIn={text => setAlamat(text)} />
          <Label label="Kelurahan" />
          <Inputs textIn={text => setKelurahan(text)} />
          <Label label="Kecamatan" />
          <Inputs textIn={text => setKecamatan(text)} />
          <Label label="Kota" />
          <Inputs textIn={text => setKodya(text)} />
          <Label label="Umur" />
          <Inputs keyboard="numeric" textIn={text => setUmur(text)} />
          <Label label="Pekerjaan" />
          <Inputs textIn={text => setPekerjaan(text)} />
          <Label label="No Telepon/HP" />
          <Inputs keyboard="numeric" textIn={text => setTelepon(text)} />
          <Label label="Penanggung Jawab" />
          <Inputs textIn={text => setPN(text)} />

          <Label label="Jenis Kelamin" />
          <Picker
            selectedValue={values[0]}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              const newV = values.map((item, index) => {
                if (index == 0) item = itemValue;
                return item;
              });
              setValues(newV);
            }}>
            <Picker.Item label="Laki-laki" value={1} />
            <Picker.Item label="Perempuan" value={2} />
          </Picker>

          <Label label="Pendidikan" />
          <Picker
            selectedValue={values[1]}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              let newV = values.map((item, index) => {
                if (index == 1) item = itemValue;
                return item;
              });
              setValues(newV);
            }}>
            <Picker.Item label="SD" value={1} />
            <Picker.Item label="SMP" value={2} />
            <Picker.Item label="SMA" value={3} />
            <Picker.Item label="Diploma" value={4} />
            <Picker.Item label="Strata" value={5} />
          </Picker>

          <Label label="Agama" />
          <Picker
            selectedValue={values[2]}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              let newV = values.map((item, index) => {
                if (index == 2) item = itemValue;
                return item;
              });
              setValues(newV);
            }}>
            <Picker.Item label="Islam" value={1} />
            <Picker.Item label="Kristen" value={2} />
            <Picker.Item label="Budha" value={3} />
            <Picker.Item label="Konghucu" value={4} />
            <Picker.Item label="Hindu" value={5} />
          </Picker>

          <Label label="Warga Negara" />
          <Picker
            selectedValue={values[3]}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              let newV = values.map((item, index) => {
                if (index == 3) item = itemValue;
                return item;
              });
              setValues(newV);
            }}>
            <Picker.Item label="WNI" value={1} />
            <Picker.Item label="WNA" value={2} />
          </Picker>

          <Label label="Status" />
          <Picker
            selectedValue={values[4]}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              let newV = values.map((item, index) => {
                if (index == 4) item = itemValue;
                return item;
              });
              setValues(newV);
            }}>
            <Picker.Item label="Menikah" value={1} />
            <Picker.Item label="Belum Menikah" value={2} />
          </Picker>

          <Label label="Golongan Darah" />
          <Picker
            selectedValue={values[5]}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              let newV = values.map((item, index) => {
                if (index == 5) item = itemValue;
                return item;
              });
              setValues(newV);
            }}>
            <Picker.Item label="A" value={1} />
            <Picker.Item label="B" value={2} />
            <Picker.Item label="O" value={3} />
          </Picker>

          <Label label="Poliklinik" />
          <Picker
            selectedValue={values[6]}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              let newV = values.map((item, index) => {
                if (index == 6) item = itemValue;
                return item;
              });
              setValues(newV);
            }}>
            <Picker.Item label="Poli Gigi" value={1} />
            <Picker.Item label="Umum" value={2} />
            <Picker.Item label="Jantung" value={3} />
          </Picker>

          <Button
            title="Submit"
            buttonStyle={{
              marginHorizontal: 5,
              height: 40,
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: 'green',
            }}
            onPress={() => {
              Axios.post(
                `http://192.168.1.6:3000/api/pasien/add`,
                {
                  nama: name,
                  alamat,
                  kelurahan,
                  kodya,
                  umur,
                  kecamatan,
                  jeniskelaminId: values[0],
                  telepon,
                  pendidikanId: values[1],
                  pekerjaan,
                  agamaId: values[2],
                  warganegaraId: values[3],
                  statusId: values[4],
                  goldarId: values[5],
                  penanggungjawab,
                  poliklinikId: values[6],
                },
                {
                  header: {
                    'Content-Type': 'application/json',
                    Authorization: `bearer ${data.token}`,
                  },
                },
              )
                .then(res => {
                  console.log(res.data);
                })
                .catch(error => {
                  console.log(error);
                });
            }}
          />

          {showDate && (
            <DateTimePicker
              value={date}
              display="default"
              onChange={setUpDate}
            />
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const Label = props => (
  <Text style={[styles.label, {marginLeft: 10}]}>{props.label}</Text>
);

const Inputs = props => {
  return (
    <View style={styles.viewInput}>
      <TextInput
        style={[styles.inputText]}
        value={props.value}
        keyboardType={props.keyboard}
        onChangeText={props.textIn}
      />
      <Icon name={props.iconName} size={35} onPress={props.click} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontFamily: 'Bold',
    marginTop: 10,
    marginBottom: 3,
    color: 'white',
  },
  viewInput: {
    borderWidth: 1,
    marginHorizontal: 5,
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    backgroundColor: 'white',
  },
  inputText: {
    height: 40,
    paddingLeft: 10,
    width: Dimensions.get('window').width / 1.18,
    fontFamily: 'Bold',
    fontSize: 18,
  },
  form: {
    // justifyContent: 'flex-end',
    margin: 5,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    borderRadius: 15,
    paddingVertical: 20,
  },
  picker: {
    width: Dimensions.get('window').width - 20,
    height: 50,
    color: 'white',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  address: {
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    height: 70,
    fontSize: 18,
    fontFamily: 'Bold',
  },
  text: {
    fontFamily: 'Bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
});

export default Form;
