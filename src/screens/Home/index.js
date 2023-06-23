import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Image, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Home = () => {
  return (
    <LinearGradient colors={['#26303A', '#0D1218']} style={{flex: 1}}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerTop}>Welcome back!</Text>
          <Image
            source={require('../../assets/drawer.png')}
            style={styles.icon}
          />
          <Text style={styles.headerBottom}>Hi Mouad 👋</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.textInput}>
            <Image
              source={require('../../assets/search.png')}
              style={styles.search}
            />
            <TextInput
              placeholder="Start your search now"
              placeholderTextColor={'rgba(255,255,255,0.6)'}
            />
          </View>
          <View style={styles.micContainer}>
            <Image
              source={require('../../assets/mic.png')}
              style={styles.mic}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personlized Picks</Text>
          <Image
            source={require('../../assets/left.png')}
            style={styles.sectionIcon}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default React.memo(Home);
