import { useState, useRef } from 'react'
import PromptList from './PromptList.js'

const usePrompts = () => {
    const [prompt, setPrompt] = useState()
    const [words, setWords] = useState()
    const promptNum = useRef(0)

    // Get prompt number that is different than previous prompt number
    const getPromptNumber = (prevPromptNum) => {
        let promptChoice = Math.floor((Math.random() * 4) + 1) 
       
        while (promptChoice === prevPromptNum) {
            promptChoice = Math.floor((Math.random() * 4) + 1)
        }

        promptNum.current = promptChoice
    }

    // Get the prompt with key = promptNum.current
    const getPrompt = () => {
        getPromptNumber(promptNum.current)
        setPrompt(PromptList[promptNum.current].prompt)
        setWords(PromptList[promptNum.current].words)
    }

    // Clear states and get new prompt
    const newPrompt = () => {
        setPrompt('')
        setWords('')
        getPrompt()
    }

    return [prompt, words, getPrompt, newPrompt]
}

export { usePrompts }