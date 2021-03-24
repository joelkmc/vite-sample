import { Button, DatePicker, Modal } from 'antd';
import React, { useState } from 'react';
import AppDatePicker from './components/AppDatePicker';

export interface IRoutes {
  path: string;
  Component: React.LazyExoticComponent<React.FC<{}>>;
}

function App() {
  const [state, setstate] = useState(false);

  return (
    <>
      <AppDatePicker onChange={(e) => console.log(e)} />
      <p className='text-visited bg-jayzur'>asdasds</p>
      <Button type='primary' className='px-10 text-kmc-new'>
        BUtton
      </Button>
      <Modal visible={state}></Modal>
    </>
  );
}

export default App;
