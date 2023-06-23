import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from './style';

// packages
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import GradientText from '../../components/GradientText';

const Onbording = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#26303A', '#0D1218']}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <GradientText
            text="Your"
            style={styles.title}
            colors={['#ABC7E3', '#8F7DBD', '#A4367A']}
          />
          <Text style={styles.title}>Personal</Text>
          <GradientText
            text="Journey"
            style={styles.title}
            colors={['#CC7A6F', '#ffffff']}
          />
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

export default React.memo(Onbording);
