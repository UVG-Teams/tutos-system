import React, { Fragment , useEffect } from 'react'

import { connect } from 'react-redux'

import * as selectors from './../../reducers'
import * as actions from './../../actions/tutorias'

import image from './../../static/idea.png'

import Navbar from '../Navbar'
import Card from './../Card'
import SideBar from './../SideBar'
import TutosContainer from './../TutosContainer'
// import SideBar from './' TODO



import './styles.css'

function DashboardTutorado({onLoad}){
    useEffect(onLoad, [])
    return(
        <>
            <Navbar />
            <div className = 'tutorado-dashboard-body'>
                <SideBar isTutorado = 'true'/>
                <TutosContainer />
            </div>
        </>        
    )
}

export default connect(
    state => ({

    }),
    dispatch => ({
        onLoad(){
            dispatch(actions.startGetTutos())
        }
    })
)(DashboardTutorado)