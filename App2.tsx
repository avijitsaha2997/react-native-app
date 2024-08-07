/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <Text>This is my new app.</Text>
      <Text>This is my new app.</Text>
      <Text>This is my new app.</Text>
      <Text>This is my new app.</Text>
      <Text>This is my new app.</Text>
      <Text>This is my new app.</Text>
    </View>
  );
};

export default FlatListBasics;

