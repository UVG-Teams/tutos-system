import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import './styles.css'; 
import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/messages';

import {
    GeneralBtn,
} from '../../../Buttons';

const ListItem = ({ id, name, isConfirmed = false }) => (
    <tr className={"list-item " + (!isConfirmed ? 'pending' : '')}>
        <td>
            <GeneralBtn text={name} action={actions.startFetchingMessages()}/>
        </td>
    </tr>
);

export default connect(
    (state, { id }) => ({
        ...selectors.getConversation(state, id),
    }),
)(ListItem);