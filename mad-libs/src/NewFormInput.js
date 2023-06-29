
const NewFormInput = ({type, val, inputIdx, change}) => {

    // Call handleChange function from NewMadLibForm.js
    const handleChange = (e) => {
        change(e)
    }

    return (
        <input 
            type='text'
            name={inputIdx}
            className='form-input'
            placeholder={type}
            value={val}
            onChange={handleChange}
        />
    )
}


export default NewFormInput