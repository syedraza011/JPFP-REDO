import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllCampusesThunk } from '../reducers/campusReducer';
import { Link } from 'react-router-dom' 

class AllCampuses extends Component {
    componentDidMount() {
        this.props.getAllCampusesThunk()
    }

    render() {
        return (
            <div>
                <h1>Campuses</h1>
                <div>
                    {this.props.campuses.map(campus => (
                        <div key={campus.id}>
                            <Link to={`/campuses/${campus.id}`}>
                                <h2>{campus.name}</h2>
                                <img src={campus.imageUrl} />
                            </Link>
                            <p>{campus.description}</p>
                        </div> 
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        campuses: state.CampusReducer.campuses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCampusesThunk: () => dispatch(getAllCampusesThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);