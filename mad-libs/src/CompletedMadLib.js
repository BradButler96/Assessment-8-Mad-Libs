import './CompletedMadLib.css';



const CompletedMadLib = ({prompt, responses, cleanUp}) => {

    const resKeys = Object.keys(responses)
    let completed = prompt;

    // Replace each blank with corresponding response value
    resKeys.map(k => {
        const key = parseInt(k) + 1
        completed = completed.replace(`__${key}__`, responses[k])
        return completed
    })

    const clean = () => {
        cleanUp()
    }

    return (
        <div className='completed-container'>
            <div className='completed-madlib'>{completed}</div>
            <div className='btn-div'>
                <button className='new-madlib-btn' onClick={clean}>Get a New MadLib</button>
            </div>
        </div>

    )
}

export default CompletedMadLib