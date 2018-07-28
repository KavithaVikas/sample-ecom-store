import React from 'react';
import ReactDOM from 'react-dom';
import CreateProduct from './createProduct.jsx';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <CreateProduct/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));