import React from 'react';

import { connect } from 'react-redux';
import { fetchDroneCameraList } from './action';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }

    componentWillMount() {

        this.props.fetchDroneCameraList();


    }

    componentWillReceiveProps(nextProps) {
        console.log("recieve props");
        if (this.props.productList != nextProps.productList) {
            console.log(nextProps.productList.data);
            this.setState({
                productList: nextProps.productList.data
            })



        }

    }
    render() {
        //let data = [{"cameraId":1,"cameraName":"DroneRush","image_url":"https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fdronerush.com%2Fwp-content%2Fuploads%2F2016%2F12%2FYuneec-Tornado-H920-camera-drone-1024x576.jpg&imgrefurl=https%3A%2F%2Fwww.dronerush.com%2Fbest-camera-drone-4180%2F&docid=M41o8Cjp3ASukM&tbnid=3bpx8rvQgLeWLM%3A&vet=10ahUKEwjikvLC3MPcAhVKLY8KHVUfB-IQMwg5KAAwAA..i&w=1024&h=576&bih=694&biw=1440&q=drone%20camera%20list&ved=0ahUKEwjikvLC3MPcAhVKLY8KHVUfB-IQMwg5KAAwAA&iact=mrc&uact=8"},{"cameraId":2,"cameraName":"UAV Coach","image_url":"https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fzi5fccrezotc23ug-zippykid.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F04%2FDJI-Inspire-1-white-camera-drone-2.jpg&imgrefurl=https%3A%2F%2Fuavcoach.com%2Fdrone-with-camera%2F&docid=JMIV4TZiwYDHwM&tbnid=IGo1rUzHsSHpIM%3A&vet=10ahUKEwjikvLC3MPcAhVKLY8KHVUfB-IQMwg6KAEwAQ..i&w=1200&h=800&bih=694&biw=1440&q=drone%20camera%20list&ved=0ahUKEwjikvLC3MPcAhVKLY8KHVUfB-IQMwg6KAEwAQ&iact=mrc&uact=8"}];
        let data= this.state.productList;
        if (data.length > 0) {
            return (
                <div>
                    <h2>List Of Drone Cameras</h2>
                    <CardList cards={data} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>No Product Found</h2>
                </div>
            )
        }
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
        fetchDroneCameraList: () => { dispatch(fetchDroneCameraList()); },
    }
}

const Card = (props) => {
    return (
        <div style={{ margin: "1em" }}>
            <img style={{ width: 75 }} src={props.image_url} />
            <div style={{ display: "inline-block", marginLeft: "20px" }}>
                <div style={{ fontSize: "1.25em", fontWeight: "bold" }}> {props.cameraId}</div>
                <div> {props.cameraName}</div>
            </div>
        </div>
    )
}

const CardList = (props) => {
    console.log("cardList");
    console.log(props.cards);
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);