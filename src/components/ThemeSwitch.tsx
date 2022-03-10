import { View, Text, TextInput } from 'react-native';
import React, { useContext, useState } from 'react';

import ThemeContext from '../contexts/theme';

const ThemeSwitch = () => {
  const { primaryColor, setPrimaryColor } = useContext(ThemeContext);
  const [tempColor, setTempColor] = useState(primaryColor);
  return (
    <View>
      <Text style={{ fontSize: 40, color: primaryColor }}>ThemeSwitch</Text>

      <TextInput
        value={tempColor}
        onChangeText={setTempColor}
        onSubmitEditing={() => setPrimaryColor(tempColor)}
      />
    </View>
  );
};

export default ThemeSwitch;
