import styles from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import { useState } from 'react';
import cn from 'classnames';

function JournalForm({ onSubmit }) {
    const [formValidState, setFormValidState] = useState({
        title: true,
        post: true,
        date: true,
    });

    const addJournalItem = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        let isFormValid = true;

        if (!formProps.title?.trim().length) {
            setFormValidState(state => ({...state, title: false}));
            isFormValid = false;
        }

        if (!formProps.post?.trim().length) {
            setFormValidState(state => ({...state, post: false}));
            isFormValid = false;
        }

        if (!formProps.date) {
            setFormValidState(state => ({...state, date: false}));
            isFormValid = false;
        }

        if (!isFormValid) {
            return;
        }

        onSubmit(formProps);
    };

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div>
                <input type='text' name='title' className={cn(styles['input-title'], {
                    [styles.invalid]: !formValidState.title,
                })}/>
            </div>

            <div className={styles['form-row']}>
                <label htmlFor='date' className={styles['form-label']}>
                    <img src='/calendar.svg' alt="Calendar Icon"/>
                    <span>Date</span>
                </label>
                <input id='date' type='date' name='date' className={cn(styles['input'], {
                    [styles.invalid]: !formValidState.date,
                })}/>
            </div>

            <div className={styles['form-row']}>
                <label htmlFor='tag' className={styles['form-label']}>
                    <img src='/folder.svg' alt="Folder Icon"/>
                    <span>Tags</span>
                </label>
                <input id='tag' type='text' name='tag' className={styles['input']}/>
            </div>


            <textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {
                [styles.invalid]: !formValidState.post,
            })}>
            </textarea>

            <Button text='Save' onClick={() => console.log('Click')}/>
        </form>
    );
}

export default JournalForm;