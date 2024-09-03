import React from 'react';
import { Accordion } from './components/Accordion'
import items from './data/content.json';

export const App: React.FC = () => {
  return (
    <Accordion items={items} />
  )
}
