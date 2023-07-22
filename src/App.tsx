import { useState } from 'react';
import './App.css';
import AppRouter from "./routes/AppRouter";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import "./App.css";
import Header from './components/common/Header';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header/> 
      <AppRouter/>
    </>
  );
}

export default withAuthenticationRequired(App)
