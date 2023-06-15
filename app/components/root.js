import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import allStudents from './allStudents'
import allCampuses from './allCampuses'
import singleStudent from './singleStudent'
import singleCampus from './singleCampus'
import NewStudent from './newStudent'
import newCampus from './newCampus'

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
        <nav id='studentLink'>
            <Link to='/students'>Students</Link>
          </nav>
          <nav id='campusLink'>
            <Link to='/campuses'>Campuses</Link>
          </nav>
          <nav id='addCampusLink'>
            <Link to='/addCampus'>New Campus</Link>
          </nav>
          <nav id='addStudentLink'>
            <Link to='/addStudent'>New Student</Link>
          </nav>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        </main>
        <Switch>
          <Route exact path='/addStudent' component={NewStudent} />
          <Route exact path='/addCampus' component={newCampus} />
          <Route exact path='/students' component={allStudents} />
          <Route exact path='/campuses' component={allCampuses} />
          <Route exact path='/students/:id' component={singleStudent} />
          <Route exact path='/campuses/:id' component={singleCampus} />
        </Switch>
      </div>
    </Router>
  )
} 
 
export default Root 
