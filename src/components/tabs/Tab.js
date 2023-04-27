import React from 'react';
import PropTypes from 'prop-types';
import classes from './tabs.module.css';
import { useTabContext } from './context';

const Tab = ({ children, tabTitle }) => {
    if (useTabContext() !== tabTitle) return null;

    return (
        <div className={classes.tabContent}>
            <div>{children}</div>
        </div>
    );
};

Tab.propTypes = {
    children: PropTypes.node,
    tabTitle: PropTypes.string.isRequired
};

export default Tab;
