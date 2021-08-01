import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  console.log('App Started...')

  return (
    <View style={styles.container}>

      {/* Today's Task */}

      <View style={styles.taskWrapper} >
        <Text style={styles.sectionTitle} >Today's Task</Text>

        <View style={styles.items} >
          {/* Task component */}
          <Task text={ 'Task 12' } />
          <Task text={ 'Task 13' } />
          <Task text={ 'Task 14' } />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginVertical: 10,
  }

});
