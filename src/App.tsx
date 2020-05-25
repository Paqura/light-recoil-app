import React from 'react';
import { Search } from './components/Search';
import { Table } from './components/Table';

import { atom } from 'recoil';

export const coronaDataAtom = atom({
  key: 'coronaDataAtom',
  default: [],
})

const App = () => {
  return (
    <div>
      <Search />
      <Table />
    </div>
  );
}

export default App;
