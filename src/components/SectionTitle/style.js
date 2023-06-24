import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
