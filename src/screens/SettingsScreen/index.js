import {CustomButton, Settings} from '~components';
import {Text, View} from 'react-native';
import {calculator, locked, printer} from '~assets';
import {navigate, replace} from '~utils';

import React from 'react';
import {SignOut} from '~/store/Actions/Auth/SignOut';
import {settingStack} from '~config';
import {useDispatch} from 'react-redux';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const logOut = async () => {
    dispatch(SignOut());
  };

  return (
    <View style={{flex: 1}}>
      <Settings svg={calculator} text="Fatura değerleri" />
      <Settings svg={locked} text="Kullanıcı seçenekleri" />
      <Settings svg={printer} text="Yazıcı ayarları" />
      <CustomButton
        textName={'fatura ayarları'}
        onPress={() => navigate(settingStack.bills_settings)}
      />
      <CustomButton textName={'Çıkış'} onPress={logOut} />
    </View>
  );
};
export {SettingsScreen};
