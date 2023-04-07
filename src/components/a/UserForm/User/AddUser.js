import React, { useState } from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredCollegeName, setEnteredCollegeName] = useState('');
  const[error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0|| enteredCollegeName.trim().length === 0){
    setError({
      title: 'Invalid input',
      message:'please enter a valid name, age and College Name (non-empty values).'
    });
      return;
  }
  if(+enteredAge < 1){
    setError({
      title: 'Invalid age',
      message:'please enter a valid age (>0).'
    });
    return;
  }
  props.onAddUser(enteredUsername,enteredAge,enteredCollegeName);
    
    setEnteredAge("");
    setEnteredUsername('');
    setEnteredCollegeName('');
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const collegeNameChangeHandler =(event) => {
    setEnteredCollegeName(event.target.value);
  };

  const errorHandler =() => {
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
        id="username" 
        type="text" 
        value ={enteredUsername} 
        onChange={userNameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input 
        id="age" 
        type="number" 
        value={enteredAge} 
        onChange={ageChangeHandler} 
        />
        <label htmlFor="collegeName">College Name </label>
        <input 
        id="collegeName" 
        type="text" 
        value={enteredCollegeName} 
        onChange={collegeNameChangeHandler} 
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
