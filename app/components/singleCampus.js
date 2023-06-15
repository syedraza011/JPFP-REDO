import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { getSingleCampusThunk, deleteCampusThunk } from '../reducers/campusReducer'
import { getAllStudentsEnrolledThunk } from '../reducers/studentReducer'
import Axios from 'axios'

class SingleCampus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.getSingleCampusThunk(this.props.match.params.id)
        this.props.getAllStudentsEnrolledThunk(this.props.match.params.id)
    }
    componentWillUnmount() {
        document.getElementById('delete2').onclick = function () {
            this.props.deleteCampusThunk(this.props.match.params.id)
        }
    }

    async handleSubmit(e) {
        e.preventDefault()
        await Axios.put(`/api/campuses/${this.props.match.params.id}`, this.state)
        this.props.getSingleCampusThunk(this.props.match.params.id)
        this.setState({
            name: '',
            address: ''
        })
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    render() {
        const campus = this.props.campus
        const students = this.props.students
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='firstName'> Name:</label>
                        <input placeholder='Update Campus Name' type='text' name='name' value={this.state.name} onChange={this.handleChange} required></input>
                        <label htmlFor='lastName'>Address:</label>
                        <input placeholder='Update Campus Address' type='text' name='address' value={this.state.address} onChange={this.handleChange} required></input>
                        <button type='submit'> Update Campus </button>
                    </form>
                </div>
                <main> 
                    <div>
                    </div>
                    <h6>{campus.name}</h6>
                    <img src={campus.imageUrl}></img>
                    <h1>{campus.address}</h1>
                    <h2>{campus.description}</h2>
                    <h3>Students Enrolled</h3>
                    <h4>{students.map(student => (
                        <div key={student.id}>
                            <Link to={`/students/${student.id}`}>
                                <h5>{student.firstName} {student.lastName}</h5>
                            </Link>
                        </div>
                    ))}</h4>
                </main>
                <div>
                    <Link to={'/campuses'}>
                        <button onClick={deleteCampusThunk(campus.id)} id='delete2'> Delete Campus </button>
                    </Link>
                </div>
            </div>
        );
    }
    async removeHandler(id) {
        await axios.delete(`/api/campuses/${id}`)
    }

}
const mapDispatchToProps = dispatch => {
    return {
        getSingleCampusThunk: id => dispatch(getSingleCampusThunk(id)),
        getAllStudentsEnrolledThunk: id => dispatch(getAllStudentsEnrolledThunk(id)),
        deleteCampusThunk: id => dispatch(deleteCampusThunk(id))
    };
};

const mapStateToProps = state => {
    return {
        campus: state.CampusReducer.campus,
        students: state.StudentReducer.students
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
