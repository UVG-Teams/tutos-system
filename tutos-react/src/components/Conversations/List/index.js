
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css'; 
import * as selectors from '../../../reducers';
import * as actions from '../../../actions/conversations';
import ListItem from './ListItem';

const List = ({ items, isLoading, onLoad }) => {
    useEffect(onLoad, []);
    return (
        <div className='conversations-list'>
            <h2>{ "CONVERSATIONS" }</h2>
            {
                items.length === 0 && !isLoading && (
                    <p>{ 'No hay' }</p>
                )
            }
            {
                isLoading && (
                    <p>{ 'Cargando...' }</p>
                )
            }
            {
                items.length > 0 && !isLoading && (
                    <table>
                        <tbody>
                            {
                                items.map(({ id }) => <ListItem key={id} id={id} />)
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    );
}

export default connect(
    state => ({
        items: selectors.getConversations(state),
        isLoading: selectors.isFetchingConversations(state),
    }),
    dispatch => ({
        onLoad() {
            dispatch(actions.startFetchingConversations());
        }
    }),
)(List);