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
import TutoCard from './TutoCard'
import StudentCard from './TutoCard';
import Card from './../Card'

import image from './../../static/idea.png'
import SideBar from './TutorSideBar'

import * as selectors from './../../reducers/tutorias';

function DashboardTutor( {recentTutos, favStudents} ){
  const match = useRouteMatch();
  return (
  <Fragment>
    <Navbar/>
    <div className = 'body'>
      <SideBar/>
      <div className = 'dashboard'>
        <h1>Tutorías recientes</h1>
        <div className ='cardslist'>
            <div className = 'tuto-estado'>
                <h2 align = 'center'>Apartadas</h2>
                <Card header = 'Apartada' image = {image}  body = {['test body']} backgroundColor = 'green'/>
            </div>
            <div className = 'tuto-estado'>
                <h2 align = 'center'>Agendadas</h2>
                <Card header='Agendada' image = {image}  body = {['test body']} backgroundColor='yellow' />
            </div>
            <div className = 'tuto-estado'>
                <h2 align = 'center'>En curso</h2>
                <Card header='En curso' image = {image}  body = {['test body']} backgroundColor='red' />
            </div>
            <div className = 'tuto-estado'>
                <h2 align = 'center'>Terminadas</h2>
                <Card header='Terminada' image = {image}  body = {['test body']} backgroundColor='cyan' />
            </div>
        </div>
        <h1>{'Tutorados favoritos'}</h1>
        <div className = 'studentslist'>
          {favStudents.map(
            (value, key) =>
            {
            //   console.log(value.name)
            return(<StudentCard
              key = {key}
              nombre = {value.name}
              clases = {value.clases}
              recent = {value.recent}
            />)}
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
      { name: 'Marco Fuentes', 
        clases: ['Calculo', 'Fisica'], 
        recent: 'Miercoles,10 de agosto' }, 
      { name: 'Marco Lima', 
        clases: ['Discreta', 'Fisica'], 
        recent: 'Miercoles,25 de agosto'},
      { name: 'Jose Fuentes', 
        clases: ['Calculo', 'Assembler'], 
        recent: 'Jueves,10 de agosto'}
    ]
    //selectors.getFavStudents(state)
  }),
  dispatch => ({

  })
)(DashboardTutor);