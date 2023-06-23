import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerTop: {
    marginTop: 54,
    marginLeft: 22,
    fontSize: 24,
    color: 'rgba(255,255,255,0.6)',
  },
  headerBottom: {
    marginLeft: 22,
    marginTop: -10,
    fontSize: 40,
    color: '#ffffff',
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    marginRight: 21,
  },
  inputContainer: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 22,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#29333C',
    borderRadius: 22,
    overflow: 'hidden',
  },
  mic: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  micContainer: {
    alignItems: 'center',
    paddingTop: 7,
    marginRight: 21,
    marginLeft: 21,
    width: 45,
    height: 45,
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
  },
  search: {
    width: 25,
    height: 25,
    marginRight: 16,
  },

  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 45,
  },
  sectionTitle: {
    fontSize: 24,
    marginLeft: 22,
    color: '#ffffff',
  },
  sectionIcon: {
    width: 20,
    height: 20,
    marginRight: 21,
    transform: [{scale: -1}],
  },
});
export default styles;
