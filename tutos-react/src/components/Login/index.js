import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Index = ({ state }) => {
    return (
        <Fragment>
            <div className="full_screen">
                <h1>{'LOGIN'}</h1>
                <h2>{'UNDER CONSTRUCTION'}</h2>
            </div>
        </Fragment>
    );
};

export default connect(
    (state) => ({
        state: state,
    })
)(Index);