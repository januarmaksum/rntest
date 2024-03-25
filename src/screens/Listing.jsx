import {View, Text, Button} from 'react-native';
import React from 'react';

export default function Listing({route, navigation}) {
  const {itemId, userName} = route.params;

  return (
    <View>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>userName: {JSON.stringify(userName)}</Text>
      <Button title="listing" onPress={() => navigation.push('Profile')} />
    </View>
  );
}
