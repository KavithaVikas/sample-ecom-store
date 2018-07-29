import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.js';
import { Router, Route, browserHistory } from 'react-router';
import CreateProduct from './createProduct';
import ProductList from './productList';

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

ReactDOM.render(<App />, document.getElementById('root'));