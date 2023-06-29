import { useState } from 'react'
import NewFormInput from './NewFormInput.js'
// import { v4 as uuid } from 'uuid';
// import { usePrompts, useForm } from './Hooks.js';


import './NewMadLibForm.css';

const NewMadLibForm = ({ wordTypes, addResponse, cleanUp }) => {
    // Create initialState object with appropriate keys for given prompt
    let initialState = {}; 
    wordTypes !== undefined 
    ? wordTypes.map((t, i) => {
        initialState[i] = ''
    }) 
    : initialState = {}

    const [formData, setFormData] = useState(initialState);

    // Handle input change when entering responses into form input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // Update responses and reset formData on submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addResponse({ formData });
        setFormData(initialState)
    }

    const clean = () => {
        cleanUp()
    }

    // Create form JSXs
    let form;
    wordTypes !== undefined 
    ? (form = (
            <div className='form-container'>
                <h1>Complete Your Madlib!</h1>
                <form onSubmit={handleSubmit} id='madlib-form'>
                  {wordTypes.map((type, i) => {
                      return (
                          <NewFormInput 
                              key={`input-${i}`} 
                              type={type} 
                              val={formData[i] || ''} 
                              inputIdx={i} 
                              change={handleChange} 
                          />
                      )
                  })} 
                </form>
                <div className='btn-div'>
                    <button form='madlib-form' type='submit' className='form-submit-btn'>Submit</button>
                    <button className='new-form-btn' onClick={clean}>Get a New MadLib</button>
                </div>
            </div>)) 
    : (form = <></>)

    return form            
}


export default NewMadLibForm

