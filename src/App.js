import React, { useState } from 'react';

import AddUser from './components/a/UserForm/User/AddUser';
import UsersList from './components/a/UserForm/User/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const AddUserHandler = (uName,uAge) => {
    setUsersList((prevUsersList) =>{
      return [...prevUsersList,{name:uName, age:uAge, id:Math.random().toString()}]
    });
  };

  return (
    <div>
      <AddUser onAddUser ={AddUserHandler} />
      <UsersList users ={usersList}/>
    </div>
  );
}

export default App;
