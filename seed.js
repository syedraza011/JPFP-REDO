const { db } = require('./server/db')
const { green, red } = require('chalk')
const Student = require('./server/db/models/StudentsDB') 
const Campus = require('./server/db/models/campusDB')  
// seed your database here!
const Students = [{
  firstName: 'Oliver',
  lastName: 'Simmons',
  email: 'oliver@gmail.com',
  imageUrl:'https://pbs.twimg.com/profile_images/980145664712740864/aNWjR7MB_400x400.jpg',
  gpa: 2.5
}, {
  firstName: 'Will',
  lastName: 'Powell',
  email: 'willyP@gmail.com',
  imageUrl:'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
  gpa: 4.0
}, {
  firstName: 'James',
  lastName: 'Schimmel',
  email: 'jschimmel@gmail.com',
  imageUrl: 'https://pmcdeadline2.files.wordpress.com/2017/08/morgan-freeman-2.jpg?w=630&h=383&crop=1',
  gpa: 3.2 
}, {
  firstName: 'Gabe',
  lastName: 'Ja',
  email: 'GabeJa@gmail.com',
  imageUrl: 'https://planetary.s3.amazonaws.com/assets/images/people/2019/20190611_bill-nye-profile-cropped_t233.jpg',
  gpa: 3.5
}]
 
const Campuses = [{
  name:'fullstack',
  imageUrl: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5153/s300/fsa-logo-stacked.png',
  address: '5 Hanover Square',
  description: 'Fullstack Academy is an immersive software engineering coding bootcamp located in New York City and Chicago.[1] Students of the full-time flagship course learn full stack JavaScript over the course of a 13-week, on-campus program. Fullstack Academy offers beginner courses in Javascript (JavaScript Jumpstart)[2] and front-end development,[3] as well as a summer program for college-age students (Summer of Code), and a part-time version of their full-time curriculum (Flex).[4]'
}, {
  name: 'Ualbany',
  imageUrl: 'https://pbs.twimg.com/profile_images/1121797541652099073/RV09dY8S_400x400.png',
  address: '1400 Washington Ave',
  description: 'The State University of New York at Albany, commonly referred to as University at Albany, SUNY Albany or UAlbany, is a public research university with campuses in the New York cities of Albany and Rensselaer and the Town of Guilderland, United States. Founded in 1844, it is part of the State University of New York (SUNY) system.[4][5]'
}, {
  name: 'Ramapo',
  imageUrl: 'https://ramapoathletics.com/images/responsive/logo.png', 
  address: '133 Ramapo rd',
  description: 'Ramapo College of New Jersey is a public liberal arts college in Mahwah, New Jersey. As of the spring 2018 semester, there were a total of 5,685 students enrolled at the college, including 483 graduate students.'
}]
  
const seed = async () => {
  await db.sync({ force: true })
  await Promise.all(Students.map(student => {
    return Student.create(student); 
  }));
  await Promise.all(Campuses.map(campus => {
    return Campus.create(campus); 
  }));
  console.log(green('Seeding success!'))
  db.close() 
}
  
seed() 
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
 