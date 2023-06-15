import React from 'react'

const CampusForm = (props) => {
    const { state, handleChange, handleSubmit } = props;
    return (
        <main>
            <h1>Add a New Campus </h1> 
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>Name:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='text' name='name' value={state.name} required></input>
                <label htmlFor='Address'>Address:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='text' name='address' value={state.address} required ></input>
                <label htmlFor='Description'>Description:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='text' name='description' value={state.description} required ></input>
                <label htmlFor='imageUrl'>imageUrl:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='text' name='imageUrl' value={state.imageUrl} required ></input>
                <button type='submit'>Submit</button>
            </form>
        </main> 
    )
}

 
export default CampusForm; 
