import React from "react";
import './UserForm.css'

function UserForm() {
    return (
        <div className ='application'>
<form className="userform">
    <label>username</label>
    <input></input>
    <label>Age(Years)</label>
    <input></input> 
    <button>Add User</button>
</form>
        </div>
    );
}

export default UserForm;