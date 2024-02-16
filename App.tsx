import {View, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import Input from './src/components/Input';
import Heading from './src/components/Heading';

const App = () => {
  return (
    <View style={style.backgroundBody}>
      <Title texts="Assigment#2" />
      <Title texts="Basic Component in RN" />
      <ScrollView>
        <Input placeholder={'Search here'} />
        <Input placeholder="Enter your Name" />
        <Input placeholder="Enter your Email" />
        <Title texts="Random box" />
        <View style={style.boxset}>
          <View style={style.box} />
        </View>
        <Title texts="Pictures of Nature" />
        <Heading caption=" 1. Sunrise" />
        <Image source={require('./asset/sunrise.jpg')} style={style.image} />
        <Heading caption=" 2. Random Art" />
        <Image source={require('./asset/art.png')} style={style.image} />
        <Heading caption=" 3. Random Art(2)" />
        <Image source={require('./asset/nature.jpg')} style={style.image} />
        {/* <Image source={}></Image> */}
        {/* <Image
        source={{uri:'https://reactnative.dev/'}}
        style={{width: 200, height: 200}}
      /> */}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  backgroundBody: {
    flexGrow: 1,
    backgroundColor: 'orange',
    padding: 20,
  },
  boxset: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  image: {
    width: 450,
    height: 450,
  },
});

export default App;
