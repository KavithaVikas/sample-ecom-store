import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


export default class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Actions on the App</h2>
                <div style={{ margin: 10 }}>
                    <Link to={"/createProduct"}>CreateProduct</Link>
                </div>
                <div style={{ margin: 10 }}>
                    <Link to={"/listProducts"} >ProductList</Link>
                </div>
            </div>
        )
    }
}

