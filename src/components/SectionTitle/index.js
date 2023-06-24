import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
const SectionTitle = ({text}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{text}</Text>
      <Image
        source={require('../../assets/left.png')}
        style={styles.sectionIcon}
      />
    </View>
  );
};

export default React.memo(SectionTitle);
