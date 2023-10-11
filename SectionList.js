import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'FRUITS',
    data: ['Apple', 'Mango', 'Orange', 'Grapes'],
  },
  {
    title: 'VEGETABLES',
    data: ['Beans', 'Egg Plant', 'Cabbage', 'Bitter melon', 'Squash'],
  },
  {
    title: 'DRINKS',
    data: ['Water', 'Soft drinks', 'Beer', 'Champagne'],
  },
  {
    title: 'DESSERTS',
    data: ['Cakes', 'Ice Cream', 'Cookies'],
  },
];

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#FFA500',
  },
  title: {
    fontSize: 24,
  },
});

export default App;