/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = ({captions}) => {
  return (
    <View>
      <Text style={style.heading1}>{captions}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  heading1: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Heading;
