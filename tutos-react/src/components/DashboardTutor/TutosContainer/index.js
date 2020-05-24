import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import * as selectors from './../../../reducers';
import * as actions from './../../../actions/tutorias';

import image from './../../../static/idea.png'

import Card from './../../Card'

import './styles.css'

const Container = ({recentTutos}) => {
    console.log(recentTutos)
    const apartadas = recentTutos.filter( value => value.status === 1)
    const agendadas = recentTutos.filter(value => value.status === 2)
    const en_curso = recentTutos.filter(value => value.status === 3)
    const terminadas = recentTutos.filter(value => value.status ===4)
    return (
        <div className = 'tutor-tutos-container'>
            <div className = 'tutos-container-column'>
                <h2 align = 'center'>Apartadas</h2>
                {apartadas.map(value => <Card 
                    key={value.id}
                    header={value.course}
                    image={image}
                    body={[value.tutor, value.tutorado, value.hours, value.total_price]}
                    backgroundColor='green'
                />)}
            </div>
            <div className='tutos-container-column'>
                <h2 align = 'center'>Agendadas</h2>
                {agendadas.map(value => <Card 
                    key={value.id}
                    header={value.course}
                    image={image}
                    body={[value.tutor, value.tutorado, value.hours, value.total_price]}
                    backgroundColor='yellow'
                />)}
            </div>
            <div className='tutos-container-column'>
                <h2 align = 'center'>En Curso</h2>
                {en_curso.map(value=> <Card 
                    key={value.id}
                    header={value.course}
                    image={image}
                    body={[value.tutor, value.tutorado, value.hours, value.total_price]}
                    backgroundColor='red'
                />)}
            </div>
            <div className='tutos-container-column'>
                <h2 align = 'center'>Terminado</h2>
                {terminadas.map(value => <Card 
                    key={value.id}
                    header={value.course}
                    image={image}
                    body={[value.tutor, value.tutorado, value.hours, value.total_price]}
                    backgroundColor='cyan'
                />)}
            </div>
        </div>
  )
}

export default connect(
    state => ({
        recentTutos : selectors.getTutorias(state),
    }),
    dispatch => {}
)(Container)