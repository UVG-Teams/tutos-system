import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import './styles.css'; 
import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/messages';

import {
    GeneralBtn,
} from '../../../Buttons';

const Message = ({ id, name, isConfirmed = false }) => (
    <tr className={"message " + (!isConfirmed ? 'pending' : '')}>
        <td>
            <GeneralBtn text={name}/>
        </td>
    </tr>
);

export default connect(
    (state, { id }) => ({
        ...selectors.getMessage(state, id),
    }),
)(Message);