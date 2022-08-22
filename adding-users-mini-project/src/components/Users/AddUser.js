import { useState } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0){
            setError({
                title: "Invalid name",
                message: "Please enter a valid name (non-empty)"
            });
            return;
        }
        if(userAge.trim().length === 0){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (non-empty)"
            });
            return;
        }
        if(+userAge < 1){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)"
            });
            return;
        }
        
        props.onAddUser(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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
        </div>
    );
};

export default AddUser;