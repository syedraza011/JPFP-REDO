import React, { Component } from 'react';
import Axios from 'axios';
import StudentForm from './studentForm';

class NewStudent extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gpa: undefined,
            campusId: undefined,
            imageUrl: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async handleSubmit(e) {
        e.preventDefault()
        await Axios.post('/api/students', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            gpa: this.state.gpa,
            campusId: this.state.campusId,
            imageUrl: this.state.imageUrl
        })
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            gpa: '',
            campusId: '',
            imageUrl: ''
        })
    }

    render() {
        return (
            <div>
                <main>
                    <h1>Add a New Student </h1> 
                    <StudentForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </main>
            </div>
        );
    }
}

export default NewStudent;