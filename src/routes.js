import React from 'react';
import {Route, IndexRoute} from 'react-router';

export default(
    <Route path="/drone" component = {App}>
    <IndexRedirect to = "ProductList"/>

    </Route>
)