import React, { useState, useRef } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        event.preventDefault();
        if(enteredName.trim().length === 0){
            setError({
                title: "Invalid name",
                message: "Please enter a valid name (non-empty)"
            });
            return;
        }
        if(enteredAge.trim().length === 0){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (non-empty)"
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)"
            });
            return;
        }
        
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    

    const errorHandler = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" 
                            type="text" 
                            ref={nameInputRef}></input>

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" 
                            type="number" 
                            ref={ageInputRef}></input>

                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default AddUser;