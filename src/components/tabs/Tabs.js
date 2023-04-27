import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabContext } from './context';
import classes from './tabs.module.css';

const Tabs = ({ tabsTitle, children }) => {
    const [tab, setTab] = useState(tabsTitle[0]);
    return (
        <TabContext.Provider value={tab}>
            <div className={classes.tabs}>
                <div className={classes.tabsTitleWrapper}>
                    {tabsTitle.map(item => (
                        <button
                            key={item}
                            onClick={() => setTab(item)}
                            className={
                                item === tab
                                    ? classes.tabsTitleActive
                                    : classes.tabsTitle
                            }
                        >
                            {item}
                        </button>
                    ))}
                </div>
                {children}
            </div>
        </TabContext.Provider>
    );
};

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    tabsTitle: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tabs;
