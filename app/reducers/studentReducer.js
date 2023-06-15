import axios from 'axios'
import { initialState } from './index'
//Action Creators 
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'
const GET_ALL_STUDENTS_ENROLLED = 'GET_ALL_STUDENTS_ENROLLED'
const DELETE_STUDENT = 'DELETE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'

export function getAllStudents(students) {
    return ({ type: GET_ALL_STUDENTS, students })
}

export function getSingleStudent(student) {
    return ({ type: GET_SINGLE_STUDENT, student })
}

export function getAllStudentsEnrolled(students) {
    return ({ type: GET_ALL_STUDENTS_ENROLLED, students })
}

export function deleteStudent(student) {
    return ({ type: DELETE_STUDENT, student })
}

export function updateStudent(student) {
    return ({ type: UPDATE_STUDENT, student }) 
}

//Thunks 
export function getAllStudentsThunk() {
    return async dispatch => {
        const { data } = await axios.get('/api/students')
        dispatch(getAllStudents(data))
    }
}

export function getSingleStudentThunk(id) {
    return async dispatch => {
        const { data } = await axios.get(`/api/students/${id}`)
        dispatch(getSingleStudent(data))
    }
} 

export function getAllStudentsEnrolledThunk(id) {
    return async dispatch => {
        const { data } = await axios.get(`/api/campuses/${id}/students`)
        dispatch(getAllStudentsEnrolled(data)) 
    }
}

export function deleteStudentThunk(id) {
    return async dispatch => {
        const { data } = await axios.delete(`/api/students/${id}`)
        dispatch(deleteStudent(data)) 
    }  
}

export function updateStudentThunk(id) {
    return async dispatch => {
        const { data } = await axios.put(`/api/students/${id}`)
        dispatch(updateStudent(data)) 
    }
}

export default function studentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return { ...state, students: action.students }
        case GET_SINGLE_STUDENT:
            return { ...state, student: action.student }
        case GET_ALL_STUDENTS_ENROLLED:
            return { ...state, students: action.students }
        case DELETE_STUDENT:
            return { ...state, student: {} }
        case UPDATE_STUDENT: 
            return { ...state, student: action.student }
        default:
            return state  
    }
} 
  