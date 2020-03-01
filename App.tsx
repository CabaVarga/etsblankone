import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Greeter } from './src/components/Greeter';
import { PartitionContainer } from './src/components/partition/PartitionContainer';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello, world!</Text>
//       <Greeter name="Csaba" />
//     </View>
//   );
// }

export default function App() {
  return (
    <View style={styles.container}>
      <PartitionContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
