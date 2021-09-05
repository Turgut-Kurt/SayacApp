import {Text, View} from 'react-native';

import React from 'react';
import {CustomButton, Settings} from '~components';
import {calculator, locked, printer} from '~assets';
import {navigate,replace} from '~utils';
import { settingStack } from '~config';
import { SignOut } from '~/store/Actions/Auth/SignOut';
import { useDispatch } from 'react-redux';



 


const SettingsScreen = () => {

   const dispatch = useDispatch();
  const logOut = async () => {
     dispatch(SignOut());

  };

  return (
    <View>
      <Settings svg={calculator} text="Fatura değerleri" />
      <Settings svg={locked} text="Kullanıcı seçenekleri" />
      <Settings svg={printer} text="Yazıcı ayarları" />
      <CustomButton
        textName={'fatura ayarları'}
        onPress={() => navigate(settingStack.bills_settings)}
      />
      <CustomButton
        textName={'Çıkış'}
        onPress={logOut}
      />
    </View>
  );
};
export {SettingsScreen};
