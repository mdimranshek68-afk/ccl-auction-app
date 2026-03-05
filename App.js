import React from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Welcome to the Auction App!</Text>
      <Button title="Place Bid" onPress={() => { /* Handle bid logic here */ }} />
    </View>
  );
};

export default App;