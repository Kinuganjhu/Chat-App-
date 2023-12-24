import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import {Button,Progress,Input} from 'rsuite';
function App() {
  return (
    <div className ='text-center'>
    <h1>ahello world</h1>
    <Input/>
    <Button color ='red'>Hello World</Button>
      
  <Progress.Line vertical percent = {80}/>

    </div>
    
  );
}

export default App;
