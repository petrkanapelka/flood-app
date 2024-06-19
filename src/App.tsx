import { useState } from 'react';
import './App.css';
import { ControlledAccardion } from './components/controlledAccardion/ControlledAccardion';
import { UncontrolledAccardion } from './components/uncontrolledAccardion/UncontrolledAccardion';
import { ControlRating } from './components/contolRating/ControlRating';
import { UncontrolRating } from './components/uncontrolRating/UncontrolRating';

export type itemType = {
  id: number,
  name: string
}

export const items: Array<itemType> = [
  { id: 1, name: 'CSS' },
  { id: 2, name: 'JS' },
  { id: 3, name: 'TS' },
  { id: 4, name: 'React' },
  { id: 5, name: 'HTML' },
]


export const Stars: Array<{value:number}> = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];

function App() {

  let [collapsed, setCollapsed] = useState(false);

  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="App">
      <UncontrolledAccardion setCollapsed={setCollapsed} collapsed={collapsed} items={items} />
      <UncontrolRating setRatingValue={setRatingValue} ratingValue={ratingValue} stars={Stars}/>
      <ControlRating />
      <ControlledAccardion />
    </div>
  );
}

export default App;
