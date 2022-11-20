import React, {useState} from 'react';
import Emails from './components/Emails';
import { emailsList } from './data/emailsList';
import './App.css'

function App() {
  const [emails, setEmails] = useState(emailsList);

  function setStatus(emailId, status) {
    console.log(emailId, status)
  }

  return (
    <div className="App">
      <header>HEADER</header>
      <div>MARCAR TODOS</div>
      <Emails emails={ emails } setStatus={ setStatus } />
    </div>
  );
}

export default App;
