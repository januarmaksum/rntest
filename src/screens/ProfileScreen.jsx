import {View, Text, Button} from 'react-native';
import React from 'react';

export default function ProfileScreen({navigation}) {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="go back" onPress={() => navigation.popToTop()} />
    </View>
  );
}
