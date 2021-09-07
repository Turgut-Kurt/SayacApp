import {CustomButton, Settings} from '~components';
import {Text, View} from 'react-native';
import {calculator, locked, printer} from '~assets';
import {navigate, replace} from '~utils';

import React from 'react';
import {SignOut} from '~/store/Actions/Auth/SignOut';
import {settingStack} from '~config';
import { useDispatch } from 'react-redux';
import { logout, home_logo } from '~/assets'
import {CustomCommonHeader} from '~/components'

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const logOut = async () => {
    dispatch(SignOut());
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomCommonHeader
        svg={home_logo}
        activeBottom={false}
      />
      <Settings svg={calculator} text="Fatura değerleri"  onPress={() => navigate(settingStack.bills_settings)}/>
      <Settings svg={locked} text="Kullanıcı seçenekleri" />
      <Settings svg={printer} text="Yazıcı ayarları" onPress={() => navigate(settingStack.printer_settings)} />
      <Settings svg={logout} text="Çıkış" onPress={logOut} />
    </View>
  );
};
export {SettingsScreen};
