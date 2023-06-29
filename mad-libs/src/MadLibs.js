import { useState } from 'react'
import NewMadLibForm from './NewMadLibForm.js'
import CompletedMadLib from './CompletedMadLib.js'
import { usePrompts } from './Hooks.js';
import './MadLibs.css';



const MadLibs = () => {

    const [prompt, words, getPrompt, newPrompt] = usePrompts()
    const [isAnswered, setIsAnswered] = useState(false)
    const [responses, setResponses] = useState({})

    // Set response state to form data and that madlib isAnswered
    const addResponse = (newResponse) => {
        setResponses(newResponse.formData)
        setIsAnswered(true)
    }

    // Clear states and get a new prompt
    const cleanUp = () => {        
        setResponses({})
        setIsAnswered(false)
        newPrompt()
    }

    return (
        <div className='madlib-container'>
            {isAnswered 
            ? <CompletedMadLib prompt={prompt} responses={responses} cleanUp={cleanUp} /> 
            : <NewMadLibForm wordTypes={words} addResponse={addResponse} cleanUp={cleanUp} />}

            {prompt === undefined 
            ? <button className='start-btn' onClick={getPrompt}>Start MadLib!</button> 
            : null}            
        </div>
    )
}


export default MadLibs