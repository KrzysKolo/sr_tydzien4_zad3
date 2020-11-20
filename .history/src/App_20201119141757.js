import React from 'react';
import './App.css';
import FormikContainer from './components/Formik/FormikContainer';
import Header from './components/Header';
const App = () => {
  return (
    <main className="App">
      <Header />
      <FormikContainer />
    </main>
   );
}

export default App;