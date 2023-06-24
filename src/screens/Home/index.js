import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import jsonData from '../../data/picks.json';
import SectionTitle from '../../components/SectionTitle';

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

        <SectionTitle text="Personlized Picks" />
        <FlatList
          data={jsonData?.length ? jsonData : []}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{paddingLeft: 22}}
          renderItem={({item}) => {
            return (
              <View style={styles.Card}>
                <Image source={{uri: item.imageSrc}} style={styles.picksCard} />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDuration}>{item.duration}</Text>
              </View>
            );
          }}
        />
        <SectionTitle text="Relax & Recharge" />
        <View style={styles.backgroundContainer}>
          <ImageBackground
            borderRadius={20}
            source={{
              uri: 'https://i.pinimg.com/originals/94/ef/9a/94ef9a9a9c7a27d772f9cadb01cc78bc.jpg',
            }}
            style={styles.backgroundImage}>
            <View style={styles.row}>
              <View>
                <Text style={styles.text}>Down the river</Text>
                <Text style={[styles.text, {fontSize: 12}]}>
                  SLEEP TRACK. 10-25 min
                </Text>
              </View>
              <View style={styles.playContainer}>
                <Image
                  source={require('../../assets/play.png')}
                  style={styles.triangle}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default React.memo(Home);
