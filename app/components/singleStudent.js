import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import { getSingleStudentThunk, deleteStudentThunk, updateStudentThunk, updateStudent } from '../reducers/studentReducer';
import { Link } from 'react-router-dom';
import { getCampusOfStudentThunk } from '../reducers/campusReducer';
import Axios from 'axios';

class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.props.getSingleStudentThunk(this.props.match.params.id)
        this.props.getCampusOfStudentThunk(this.props.match.params.id)
    }     

    componentWillUnmount() {
        document.getElementById('delete').onclick = function () {
            this.props.deleteStudentThunk(this.props.match.params.id)
        }
    }
    async handleSubmit(e) {
        e.preventDefault()
        await Axios.put(`/api/students/${this.props.match.params.id}`, this.state) 
        this.props.getSingleStudentThunk(this.props.match.params.id) 
    } 

    handleChange(e) {
        e.preventDefault()
        this.setState({ 
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    render() {
        const student = this.props.student
        const campus = this.props.campus
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='firstName'>First Name:</label>
                        <input placeholder='Update Your Name' type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} ></input>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input placeholder='Update Your Name' type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} ></input>
                        <button type='submit'> Update Student </button>
                    </form>
                </div>
                <main>
                    <h1>{student.firstName} {student.lastName}</h1>
                    <img src={student.imageUrl}></img>
                    <h2>{student.email}</h2>
                    <h3>{student.gpa}</h3>
                    <h4>Current School</h4>
                    <Link to={`/campuses/${campus.id}`}>
                        <h5>{campus.name}</h5>
                        <img src={campus.imageUrl} />
                    </Link>
                </main>
                <div>
                    <Link to={'/students'}>
                        <button onClick={deleteStudentThunk(student.id)} id='delete'> Delete Student </button>
                    </Link>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSingleStudentThunk: id => dispatch(getSingleStudentThunk(id)),
        getCampusOfStudentThunk: id => dispatch(getCampusOfStudentThunk(id)),
        deleteStudentThunk: id => dispatch(deleteStudentThunk(id)),
    };
};

const mapStateToProps = state => {
    return {
        student: state.StudentReducer.student,
        campus: state.CampusReducer.campus
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent); 