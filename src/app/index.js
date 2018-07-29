import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.js';
import { Router, Route, browserHistory } from 'react-router';
import CreateProduct from './createProduct';
import ProductList from './productList';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            
            <Router history={browserHistory}>
                <Route path="/" component={Root}/>
                <Route path="createProduct" component={CreateProduct}/>
                <Route path="listProducts" component={ProductList}/>
            </Router>
        )
    }
}

ReactDOM.render(
<Provider><App /></Provider>, 
    
    document.getElementById('root'));