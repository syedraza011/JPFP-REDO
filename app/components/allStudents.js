import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllStudentsThunk, getAllStudents } from '../reducers/studentReducer';
import { Link } from 'react-router-dom';

class AllStudents extends Component {
    componentDidMount() {
        this.props.getAllStudentsThunk()
    }

    render() {
        return (
            <div> 
                <h1>Students {console.log(this.props)}</h1>  
                <div>
                    {this.props.students.map(student => (
                        <div key={student.id}>
                            <Link to={`/students/${student.id}`}>
                                <h2>{student.firstName}</h2>
                                <img src={student.imageUrl} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }  
}

const mapStateToProps = state => {
    return {
        students: state.StudentReducer.students 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllStudentsThunk: () => dispatch(getAllStudentsThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);