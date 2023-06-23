import React from 'react';
import {Text} from 'react-native';

import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = ({style, colors, text}) => {
  return (
    <MaskedView maskElement={<Text style={style}>{text}</Text>}>
      <LinearGradient
        colors={[...colors]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <Text style={[style, {opacity: 0}]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default React.memo(GradientText);
