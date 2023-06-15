import React from 'react'

const StudentForm = (props) => {
    const { state, handleChange, handleSubmit } = props;
    return (
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='text' name='firstName' value={state.firstName} required></input>
                <label htmlFor='lastName'>Last Name:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='text' name='lastName' value={state.lastName} required ></input>
                <label htmlFor='email'>Email:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='text' name='email' value={state.email} required ></input>
                <label htmlFor='Gpa'>GPA:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='integer' name='Gpa' value={state.gpa} required ></input>
                <label htmlFor='campusId'>Campus Id:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='integer' name='campusId' value={state.campusId} required ></input>
                <label htmlFor='imageUrl'>imageUrl:</label>
                <input placeholder='This field is required!' onChange={handleChange} type='text' name='imageUrl' value={state.imageUrl} required ></input>
                <button type='submit'>Submit</button>
            </form>
    ) 
}

 
export default StudentForm; 
