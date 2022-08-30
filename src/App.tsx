import React from 'react';
import ClassElement from './components/classBasedElement'




type user = {
  name: string,
  surname:string,
}

function App() {
  const users: user[] = [{
    name: 'Alius',
    surname: 'Grigaliūnas'
  },{
    name:'Lukas',
    surname:'Ignatjevas',
  }] 

  const ReturnUser = users.map((user, i) => {
    return <p key={i}>
      {user.name}
    </p>;
  })

  console.log(ReturnUser);

  return (
    <div className="App">
      <h1>This is a function component</h1>
      <ClassElement />
      {ReturnUser}
    </div>
  );
}

export default App;
