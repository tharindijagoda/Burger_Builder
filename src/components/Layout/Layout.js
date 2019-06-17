import React from 'react';
import { Fragment } from 'react';

import classes from './Layout.module.css';

const layout = ( props )=>(
    <Fragment>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
    
);

export default layout;