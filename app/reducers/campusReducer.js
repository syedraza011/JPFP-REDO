import axios from 'axios'
import { initialState } from './index'

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'
const GET_CAMPUS_OF_STUDENT = 'GET_CAMPUS_OF_STUDENT'
const DELETE_CAMPUS = 'DELETE_CAMPUS'

export function getAllCampuses(campuses) {
    return ({ type: GET_ALL_CAMPUSES, campuses })
}

export function getSingleCampus(campus) {
    return ({ type: GET_SINGLE_CAMPUS, campus })
}

export function getCampusOfStudent(campus) {
    return ({ type: GET_CAMPUS_OF_STUDENT, campus })
}

export function deleteCampus(campus) {
    return ({ type: DELETE_CAMPUS, campus })
}

export function getAllCampusesThunk() {
    return async dispatch => {
        const { data } = await axios.get('/api/campuses')
        dispatch(getAllCampuses(data))
    }
}

export function getSingleCampusThunk(id) {
    return async dispatch => {
        const { data } = await axios.get(`/api/campuses/${id}`)
        dispatch(getSingleCampus(data))
    }
}

export function getCampusOfStudentThunk(id) {
    return async dispatch => {
        const { data } = await axios.get(`/api/students/${id}/campus`)
        dispatch(getCampusOfStudent(data))
    }
}

export function deleteCampusThunk(id) {
    return async dispatch => {
        const { data } = await axios.delete(`/api/campuses/${id}`)
        dispatch(deleteCampus(data))
    }
}

export default function campusReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CAMPUSES:
            return { ...state, campuses: action.campuses }
        case GET_SINGLE_CAMPUS:
            return { ...state, campus: action.campus }
        case GET_CAMPUS_OF_STUDENT:
            return { ...state, campus: action.campus }
        case DELETE_CAMPUS:
            return { ...state, campus: {} }
        default:
            return state
    }
}
