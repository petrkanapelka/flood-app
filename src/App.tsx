import React, { useState } from 'react';
import './App.css';
import { ControlledAccardion } from './components/controlledAccardion/ControlledAccardion';
import { UncontrolledAccardion } from './components/uncontrolledAccardion/UncontrolledAccardion';
import { ControlRating } from './components/contolRating/ControlRating';
import { UncontrolRating } from './components/uncontrolRating/UncontrolRating';
import { itemsSelected, Select } from './components/select/Select';

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


export const Stars: Array<{ value: number }> = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];

function App() {

  let [collapsed, setCollapsed] = useState(false);

  const [ratingValue, setRatingValue] = useState(0);

  const [value, setValue] = useState('2')

  const UncontrolRatingMemo = React.memo(UncontrolRating)
  const ControlRatingMemo = React.memo(ControlRating)
  const UncontrolledAccardionMemo = React.memo(UncontrolledAccardion)
  const ControlledAccardionMemo = React.memo(ControlledAccardion)
  const SelectMemo = React.memo(Select)

  return (
    <div className="App">
      <UncontrolledAccardionMemo setCollapsed={setCollapsed} collapsed={collapsed} items={items} />
      <UncontrolRatingMemo setRatingValue={setRatingValue} ratingValue={ratingValue} stars={Stars} />
      <ControlRatingMemo />
      <ControlledAccardionMemo />
      <SelectMemo value={value} items={itemsSelected} onChange={setValue} />
    </div>
  );
}

export default App;
