import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
const App = () => {
  const [state, setState] = useState('Paras');
  const [newState, setNewState] = useState(false);
  useEffect(() => {
    console.log('hello');
    setState('Tandon');
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Add"
        onPress={() => {
          setNewState(prev => !prev);
        }}></Button>
      <Text>{state}</Text>
    </SafeAreaView>
  );
};

export default App;
