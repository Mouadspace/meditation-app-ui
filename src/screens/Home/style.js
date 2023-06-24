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

  Card: {
    flexDirection: 'column',
    marginTop: 25,
    paddingRight: 20,
  },
  picksCard: {
    width: 207,
    height: 123,
    borderRadius: 20,
  },
  cardTitle: {
    marginTop: 8,
    color: '#ffffff',
  },
  cardDuration: {
    fontSize: 12,
    marginTop: 4,
    color: 'rgba(255,255,255,0.6)',
  },
  backgroundContainer: {
    marginTop: 3, // 25
    padding: 22,
  },
  backgroundImage: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 25,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playContainer: {
    width: 50,
    height: 50,
    borderRadius: 25, // 50/2 <=> 50%
    backgroundColor: 'white',
    marginRight: 25,
  },
  triangle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginTop: 14,
    marginLeft: 3,
  },
});
export default styles;
