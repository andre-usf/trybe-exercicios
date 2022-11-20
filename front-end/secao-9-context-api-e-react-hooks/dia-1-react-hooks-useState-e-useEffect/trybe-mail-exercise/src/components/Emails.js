import React from 'react';

function Emails({emails, setStatus}) {
  return (
    <div>
      <ul>
        {emails.map((email) => (
          <div key={email.id}>
            <li className="">{email.title}</li>
            <button name="lido" type="button" onClick={ () => setStatus(email.id, 1) }>Lido</button>
            <button name="naolido" type="button" onClick={ () => setStatus(email.id, 0) }>Não lido</button>
          </div>
        ))}
      </ul>
    </div>
    );
  }
  
export default Emails;
