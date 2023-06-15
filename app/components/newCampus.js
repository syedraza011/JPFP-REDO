import React, { Component } from 'react';
import Axios from 'axios';
import CampusForm from './campusForm';

class newCampus extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            description: '',
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
       await Axios.post('/api/campuses', {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            imageUrl: this.state.imageUrl
        })
        this.setState({
            name: '',
            address: '',
            description: '',
            imageUrl: '' 
        })
    }

    render() {
        return (
            <div>
                <CampusForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
} 

export default newCampus;