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
  console.log('kok gak masuk kocak');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <View>
        <Text>Home Screen</Text>
        <Button
          title="go to about"
          onPress={() => navigation.navigate('Profile')}
        />
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
