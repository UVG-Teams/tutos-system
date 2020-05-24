
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import './styles.css'; 
import * as selectors from '../../../reducers';
// import * as actions from '../../../actions/messages';
import Message from './Message';

const Conversation = ({ conversation, messages, isLoading, onLoad }) => {
    // useEffect(onLoad, []);
    return (
        <div className='conversation'>
            {/* <h2>{ conversation.user1 }</h2> */}
            {
                messages.length === 0 && !isLoading && (
                    <p>{ 'Comienza una conversacion' }</p>
                )
            }
            {
                isLoading && (
                    <p>{ 'Cargando...' }</p>
                )
            }
            {
                messages.length > 0 && !isLoading && (
                    <table>
                        <tbody>
                            {
                                messages.map(({ id }) => <Message key={id} id={id} />)
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
        messages: selectors.getMessages(state),
        isLoading: selectors.isFetchingMessages(state),
    }),
    dispatch => ({
        // onLoad() {
        //     dispatch(actions.startFetchingConversations());
        // }
    }),
)(Conversation);