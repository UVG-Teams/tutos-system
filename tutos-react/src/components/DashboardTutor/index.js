import React , { Fragment , useEffect } from 'react'
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
import Card from './../Card'

import image from './../../static/idea.png'
import SideBar from './TutorSideBar'

import TutosContainer from './TutosContainer'

import * as selectors from './../../reducers';
import * as actions from './../../actions/tutorias';

function DashboardTutor( {state, onLoad} ){
    useEffect(onLoad , [])
    const match = useRouteMatch();
    return (
        <Fragment>
            <Navbar/>
            <div className = 'body'>
                <SideBar/>
                <TutosContainer />
            </div>
        </Fragment>
  )
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        onLoad(){
            dispatch(actions.startGetTutos())
    } 
})
)(DashboardTutor);