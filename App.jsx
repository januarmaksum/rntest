import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Button,
} from 'react-native';

function App({navigation}) {
  const handlePress = () => {
    navigation.navigate('Listing', {
      itemId: 70,
      userName: 'Januar maksum',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <View>
        <Text>Home Screen</Text>
        <Button title="go to listing" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
