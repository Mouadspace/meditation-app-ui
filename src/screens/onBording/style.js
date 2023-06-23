import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 64,
  },
  titleContainer: {
    marginTop: 120,
    marginLeft: 31,
  },
  subTitle: {
    marginTop: 25,
    marginLeft: 31,
    marginRight: 53,
    fontSize: 20,
    color: 'rgba(255,255,255,0.6)',
  },
  icon: {
    flex: 1,
    position: 'absolute',
    bottom: 43,
    right: 33,
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  iconImg: {
    width: 31,
    height: 31,
    top: 19.5,
    left: 19.5,
    transform: [{scale: -1}],
  },
  gradient: {
    position: 'absolute',
    top: -80,
    left: 0,
  },
});

export default styles;
