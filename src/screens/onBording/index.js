import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from './style';

// packages
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

const Onbording = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#26303A', '#0D1218']}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <LinearTextGradient
            style={styles.title}
            locations={[0, 0.5, 1]}
            colors={['#ABC7E3', '#8F7DBD', '#A4367A']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>Your</Text>
          </LinearTextGradient>
          <Text style={styles.title}>Personal</Text>
          <LinearTextGradient
            style={styles.title}
            locations={[0, 1]}
            colors={['#CC7A6F', '#fff']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>Journey</Text>
          </LinearTextGradient>
          <Text style={styles.title}>Begins</Text>
          <Text style={styles.title}>Here</Text>
        </View>
        <Text style={styles.subTitle}>
          Start your journey to better mental and physical health with Mind &
          Body.
        </Text>
        <LinearGradient
          style={styles.icon}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={['#E9AD8B', '#D053ED', '#A681E7']}>
          <Image
            style={styles.iconImg}
            source={require('../../assets/back.png')}
          />
        </LinearGradient>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Onbording;
