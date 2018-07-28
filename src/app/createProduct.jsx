import React from 'react';
import axios from 'axios';

export default class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productType: "",
            productName: "",
            productSlug: "",
            productSku: "",
            manageStocks: false,
            productDescription: "",
            productPrice: [],
            priceAmount: "",
            priceCurrency: "",
            prodIncludesTax: "",
            status: "",
            commodityType: ""


        }
        this.createProduct = this.createProduct.bind(this);
        
        this.onChangeProductType = this.onChangeProductType.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductSlug = this.onChangeProductSlug.bind(this);
        this.onChangeProductSku = this.onChangeProductSku.bind(this);
        this.onChangeManageStock = this.onChangeManageStock.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangePriceAmount = this.onChangePriceAmount.bind(this);
        this.onChangePriceCurrency = this.onChangePriceCurrency.bind(this);
        this.onChangeTax = this.onChangeTax.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeCommodity = this.onChangeCommodity.bind(this);

    }

    createProduct() {
        console.log("SAVE***")
        let saveObj = {
            type: this.state.productType,
            name:this.state.productName,
            slug: this.state.productSlug,
            sku: this.state.productSku,
            manage_stock: this.state.manageStocks,
            description: this.state.productDescription,
            price: [
                {
                    "amount": 5891,
                    "currency": "USD",
                    "includes_tax": true
                }
            ],
            //priceAmount:this.state.priceAmount,
            //priceCurrency:this.state.priceCurrency,
            //prodIncludesTax:this.state.prodIncludesTax,
            status:this.state.status,
            commodity_type:this.state.commodityType
}
        console.log(saveObj);

        return axios.post('http://localhost:5001/api/save/', saveObj).then(function(response){
            console.log("response");
            console.log(response);

        });
    }
    onChangeProductType(e) {
        this.setState({
            productType: e.target.value
        })
    }
    onChangeProductName(e) {
        this.setState({
            productName: e.target.value
        })
    }
    onChangeProductSlug(e) {
        this.setState({
            productSlug: e.target.value
        })
    }
    onChangeProductSku(e) {
        this.setState({
            productSku: e.target.value
        })
    }
    onChangeManageStock(e) {
        this.setState({
            manageStocks: e.target.value
        })
    }
    onChangeProductDescription(e) {
        this.setState({
            productDescription: e.target.value
        })
    }
    onChangeProductPrice(e) {
        this.setState({
            productPrice: e.target.value
        })
    }
    onChangePriceAmount(e) {
        this.setState({
            priceAmount: e.target.value
        })
    }
    onChangePriceCurrency(e) {
        this.setState({
            priceCurrency: e.target.value
        })
    }
    onChangeTax(e) {
        this.setState({
            prodIncludesTax: e.target.value
        })
    }
    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        })

    }
    onChangeCommodity(e) {
        this.setState({
            commodityType: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Create Product</h2>
                </div>
                <div>
                    <label>Product Type : </label>
                    <input type="text" name="Type" value={this.state.productType} onChange={this.onChangeProductType} />
                </div>
                <div>
                    <label>Product Name : </label>
                    <input type="text" name="Type" value={this.state.productName} onChange={this.onChangeProductName} />
                </div>
                <div>
                    <label>Product Slug : </label>
                    <input type="text" name="Type" value={this.state.productSlug} onChange={this.onChangeProductSlug} />
                </div>
                <div>
                    <label>Product Sku : </label>
                    <input type="text" name="Type" value={this.state.productSku} onChange={this.onChangeProductSku} />
                </div>
                <div>
                    <label>Manage Stocks : </label>
                    <select value={this.state.manageStocks} onChange={this.onChangeManageStock}>
                        <option name="true">True</option>
                        <option name="false">False</option>
                    </select>
                </div>
                <div>
                    <label>Product Description : </label>
                    <input type="text" name="Type" value={this.state.productDescription} onChange={this.onChangeProductDescription} />
                </div>
                <div>
                    <label>Product Price : </label>
                    <input type="text" name="Type" value={this.state.productPrice} onChange={this.onChangeProductPrice} />
                </div>
                <div>
                    <label>Price Amount : </label>
                    <input type="text" name="Type" value={this.state.priceAmount} onChange={this.onChangePriceAmount} />
                </div>
                <div>
                    <label>Price Currency : </label>
                    <input type="text" name="Type" value={this.state.priceCurrency} onChange={this.onChangePriceCurrency} />
                </div>

                <div>
                    <label>Price Includes Tax : </label>
                    <select value={this.state.prodIncludesTax} onChange={this.onChangeTax}>
                        <option name="yes">True</option>
                        <option name="no">False</option>
                    </select>
                </div>

                <div>
                    <label>Status: </label>
                    <input type="text" name="Type" value={this.state.status} onChange={this.onChangeStatus} />
                </div>

                <div>
                    <label>Commodity Type : </label>
                    <input type="text" name="Type" value={this.state.commodityType} onChange={this.onChangeCommodity} />
                </div>
                <div>
                    <button onClick={this.createProduct}> Save Product </button>
                </div>

            </div>
        )
    }

}