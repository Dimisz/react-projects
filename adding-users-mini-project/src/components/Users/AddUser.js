import { useState } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title: 'Empty input', message: "Fill out all the fields"});
            return;
        }
        if(Number(enteredAge) < 1){
            setError({title: 'Invalid age', message: "Age should be greater than 0"});
            return;
        }

        // pushing the values up one level
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError();
    }


    return (
    <div>
        {error && <ErrorModal title={error.title} 
                              message={error.message} 
                              onAcknowledgeError={errorHandler}/> 
        }
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" 
                    type="text" 
                    onChange={usernameChangeHandler}
                    value={enteredUserName}
                />

                <label htmlFor="age">Age (Years)</label>
                <input id="age" 
                        type="number" 
                        onChange={ageChangeHandler}
                        value={enteredAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </div>
    );
}

export default AddUser;