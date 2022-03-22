import React from 'react';
import './App.css';
import boxes from './boxesData';
import BoxesDisplay from './components/BoxesDisplay';

function App() {

const [boxData, setBoxData] = React.useState(boxes)


function toggleActive(id) {
  const newState = boxData.slice()
  newState[id - 1].on = !newState[id -1].on
  setBoxData(newState)
}

const boxElement = boxData.map(box => {
  return <BoxesDisplay 
    key={box.id}
    id={box.id} 
    active={box.on}
    toggleActive={toggleActive}
  />
})

  return (
    <div className="App">
      {boxElement}
    </div>
  );
}

export default App;
