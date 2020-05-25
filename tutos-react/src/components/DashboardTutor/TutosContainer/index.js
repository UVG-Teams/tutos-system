import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import * as selectors from './../../../reducers';
import * as actions from './../../../actions/tutorias';

import image from './../../../static/idea.png'

import Card from './../../Card'

import './styles.css'

const Container = ({state,recentTutos, changeStatus}) => {
    const apartadas = recentTutos.filter( value => value.status === 1)
    const agendadas = recentTutos.filter(value => value.status === 2)
    const en_curso = recentTutos.filter(value => value.status === 3)
    const terminadas = recentTutos.filter(value => value.status ===4)
    // console.log('ESTADOO',state)
    return (
        <div className = 'tutor-tutos-container'>
            <div className = 'tutos-container-column'>
                <h2 align = 'center'>Apartadas</h2>
                {apartadas.map(value => <Card 
                    key={value.id}
                    header={value.tutorado.first_name}
                    image={image}
                    body={[value.tutor.first_name, , value.location ? value.location : 'Sin ubicacion', value.topic ? value.topic : 'Sin Tema especifico','Q. '.concat(value.total_price)]}
                    backgroundColor='green'
                    onClick = {() => {
                        // console.log(value.id)
                        changeStatus(value.id)
                    }}
                />)}
            </div>
            <div className='tutos-container-column'>
                <h2 align = 'center'>Agendadas</h2>
                {agendadas.map(value => <Card 
                    key={value.id}
                    header={value.tutorado.first_name}
                    image={image}
                    body={[value.tutor.first_name, , value.location ? value.location : 'Sin ubicacion', value.topic ? value.topic : 'Sin Tema especifico', 'Q. '.concat(value.total_price)]}
                    backgroundColor='yellow'
                    onClick={() => {
                        // console.log(value.id)
                        changeStatus(value.id)
                    }}
                />)}
            </div>
            <div className='tutos-container-column'>
                <h2 align = 'center'>En Curso</h2>
                {en_curso.map(value=> <Card 
                    key={value.id}
                    header={value.tutorado.first_name}
                    image={image}
                    body={[value.tutor.first_name, , value.location ? value.location : 'Sin ubicacion', value.topic ? value.topic : 'Sin Tema especifico', 'Q. '.concat(value.total_price)]}
                    backgroundColor='red'
                    onClick={() => {
                        // console.log(value.id)
                        changeStatus(value.id)
                    }}
                />)}
            </div>
            <div className='tutos-container-column'>
                <h2 align = 'center'>Terminado</h2>
                {terminadas.map(value => <Card 
                    key={value.id}
                    header={value.tutorado.first_name}
                    image={image}
                    body={[value.tutor.first_name, , value.location ? value.location : 'Sin ubicacion', value.topic ? value.topic : 'Sin Tema especifico', 'Q. '.concat(value.total_price)]}
                    backgroundColor='cyan'
                    onClick={() => {
                        // console.log(value.id)
                        changeStatus(value.id)
                    }}
                />)}
            </div>
        </div>
  )
}

export default connect(
    state => ({
        state, 
        recentTutos : selectors.getTutorias(state),
    }),
    dispatch => ({
        changeStatus(id){
            dispatch(actions.startChangeTutoriaStatus(id))
        }
    })
)(Container)