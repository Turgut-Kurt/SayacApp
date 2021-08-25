import {Text, View} from 'react-native';

import React from 'react';
import {CustomButton, Settings} from '~components';
import {calculator, locked, printer} from '~assets';
import {navigate} from '~utils';
import {settingStack} from '~config';
const SettingsScreen = () => {
  return (
    <View>
      <Settings svg={calculator} text="Fatura değerleri" />
      <Settings svg={locked} text="Kullanıcı seçenekleri" />
      <Settings svg={printer} text="Yazıcı ayarları" />
      <CustomButton
        textName={'fatura ayarları'}
        onPress={() => navigate(settingStack.bills_settings)}
      />
    </View>
  );
};
export {SettingsScreen};
