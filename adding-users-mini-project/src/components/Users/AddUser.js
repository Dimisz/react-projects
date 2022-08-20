import { useState } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0){
            console.log('Pllease enter user name');
            return;
        }
        if(userAge.trim().length === 0){
            console.log("Please enter age");
            return;
        }
        if(+userAge < 1){
            console.log('Enter a valid age (>0)');
            return;
        }
        console.log(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" 
                        type="text" 
                        value={userName}
                        onChange={userNameChangeHandler}></input>

                <label htmlFor="age">Age (Years)</label>
                <input id="age" 
                        type="number" 
                        value={userAge}
                        onChange={userAgeChangeHandler}></input>

                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;