import React from 'react';
import { connect } from 'react-redux';

 class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxStatus:true,
            selectedItem:""
        }

        this.selectItemForCheckout = this.selectItemForCheckout.bind(this);
    }

    selectItemForCheckout(e){
        console.log("checkbox selected")
        console.log(e.target.value);
        this.setState({
            checkboxStatus:!this.state.checkboxStatus,
            selectedItem:e.target.value
        })
        let data = {checkboxStatus:!this.state.checkboxStatus,
        value:e.target.value}
        this.props.setSelectedItems(data);
    }
    render() {
        return (
            <div style={{ margin: "1em" }}>

                <input type="checkbox" value={this.props.cameraId} checked={!this.state.checkboxStatus} style={{ margin: 10 }} onChange={this.selectItemForCheckout} />
                <img style={{ width: 75 }} src={this.props.image_url} />
                <div style={{ display: "inline-block", marginLeft: "20px" }}>
                    <div style={{ fontSize: "1.25em", fontWeight: "bold" }}> {this.props.cameraId}</div>
                    <div> {this.props.cameraName}</div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.camera.cameraList);
    return {
        productList: state.camera.cameraList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (data) => { dispatch({
            type:"ADD_TO_CART",
            payload:data

        }); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);