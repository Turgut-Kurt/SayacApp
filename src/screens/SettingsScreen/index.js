import {Text, View} from 'react-native';

import React from 'react';
import { Settings } from '~components';
import { calculator, locked, printer } from '~/assets';

const SettingsScreen = () => {
  return (
    <View>
      <Settings
        svg={calculator}
        text='Fatura değerleri' />
      <Settings
        svg={locked}
        text='Kullanıcı seçenekleri' />
      <Settings
        svg={printer}
        text='Yazıcı ayarları' />
    </View>
  );
};
export {SettingsScreen};
