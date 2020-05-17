import React , { Fragment } from 'react'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './styles.css'; 
import '../../index.css';
import '../../normalize.css';

import Navbar from '../Navbar'
import TutoCard from './../TutoCard'
import StudentCard from './../StudentCard'

import * as selectors from './../../reducers/mainPage';
import SideBar from './../TutorSideBar'

function DashboardTutor( {recentTutos, favStudents} ){
  const match = useRouteMatch();
  return (
  <Fragment>
    <Navbar/>
    <div className = 'body'>
      <SideBar/>
      <div className = 'dashboard'>
        <h1>{'Tutorías recientes'}</h1>
        <div className ='cardslist'>
          {
            recentTutos.map(
              (value, index) => (
                <TutoCard 
                clase = {value.clase}
                date = {value.date}
                time = {value.time}
                students = {value.students}
                location = {value.location}
                totalCost = {value.totalCost}
                key = {index}
                />
              ) 
            )
          }
        </div>
        <h1>{'Tutorados favoritos'}</h1>
        <div className = 'studentslist'>
          {favStudents.map(
            value =>
            <StudentCard
              nombre = {value.name}
              clases = {value.clases}
              recent = {value.recent}
            />
          )}
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default connect(
  state => ({
    recentTutos : [{
      clase : 'Calculo',
      date: 'Miércoles, 13 de mayo',
      time : '15:00-17:30',
      students: 'Marco Fuentes, Jose Lima',
      location  : 'Uvg',
      totalCost : 500.00,
    },
      {
        clase: 'Calculo',
        date: 'Miércoles, 13 de mayo',
        time: '15:00-17:30',
        students: 'Marco',
        location: 'Uvg',
        totalCost: 500.00,
      }
  ],
    favStudents : [
      { name: 'Marco Fuentes', clases: ['Calculo', 'Fisica'], recent: 'Miercoles,10 de agosto' }, 
      { name: 'Marco Lima', clases: ['Discreta', 'Fisica'], recent: 'Miercoles,25 de agosto'},
      { name: 'Jose Fuentes', clases: ['Calculo', 'Assembler'], recent: 'Jueves,10 de agosto'}
    ]
    //selectors.getFavStudents(state)
  }),
  dispatch => ({

  })
)(DashboardTutor);