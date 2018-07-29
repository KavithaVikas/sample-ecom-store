import React from 'react';
import ReactDOM from 'react-dom';
import CreateProduct from './createProduct';
import ProductList from './productList';


export default class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Actions on the App</h2>
                <div style={{ margin: 10 }}>
                    <button type="button" className="btn btn-primary">CreateProduct</button>
                </div>
                <div style={{ margin: 10 }}>
                    <button type="button" className="btn btn-primary">ProductList</button>
                </div>
            </div>
        )
    }
}

