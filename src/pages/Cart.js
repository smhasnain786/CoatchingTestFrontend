import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { getCartTotalAmountAndQuentity, getBookFromCart, removeItemFromCart } from "../services/book.service";
import { imageUrl } from "../services/dataurl";
import { HotToaster } from "../utils/Toaster";
//images
import book3 from './../assets/images/books/grid/book3.jpg';
import book2 from './../assets/images/books/grid/book2.jpg';
import book4 from './../assets/images/books/grid/book4.jpg';
import book1 from './../assets/images/books/grid/book1.jpg';
import book6 from './../assets/images/books/grid/book6.jpg';
import book5 from './../assets/images/books/grid/book5.jpg';
//Components 
import PageTitle from './../layouts/PageTitle';

const cartDetial = [
    { id: '1', image: book3, title: 'Battle Drive', price: '28.00', number: 0 },
    { id: '2', image: book2, title: 'Home', price: '28.00', number: 0 },
    { id: '3', image: book4, title: 'Such A Fun Age', price: '28.00', number: 0 },
    { id: '4', image: book1, title: 'Real Life', price: '28.00', number: 0 },
    { id: '5', image: book6, title: 'Cat Adventure', price: '28.00', number: 0 },
    { id: '6', image: book5, title: 'Take Out Tango', price: '28.00', number: 0 },
];

function ShopCart() {
    const [shopData, setShopData] = useState(cartDetial);
    const [cart, setCart] = useState([])
    const [totalAmount, settotalAmount] = useState(0)
    const [noOfCart, setNoOfcart] = useState(0);
    const [query, setQuery] = useState("");
    const [totalAmountAndQuentity, setTotalAmountAndQuentity] = useState([]);

    useEffect(() => {
        getCartDetails()
    }, [])
    const getTotalAmount = async () => {
        let result = await getCartTotalAmountAndQuentity()
        if (result.status) {
            setTotalAmountAndQuentity(result.data)
        }
    }
    const getCartDetails = async () => {
        let result = await getBookFromCart()
        if (result.status) {
            setCart(result.data)
            totalAmountFun(result.data)
        }
    }
    const totalAmountFun = (item) => {
        let i = 0
        let total = 0
        for (i; i < item.length; i++) {
            total += item[i].bookdata[0]?.sellingPrice
        }
        settotalAmount(total)
    }
    const removeCart = async (item) => {
        let data = {
            id: item._id
        }
        let result = await removeItemFromCart(data)
        if (result.status) {
            getCartDetails()
            getTotalAmount()
        }
        HotToaster(result.status, result.message)

    }
    const handleDeleteClick = (shopId) => {
        const newItem = [...shopData];
        const index = shopData.findIndex((data) => data.id === shopId);
        newItem.splice(index, 1);
        setShopData(newItem);
    }

    const handleNumPlus = (e) => {
        let temp = shopData.map((data) => {
            if (e === data.id) {
                return { ...data, number: data.number + 1 };
            }
            return data;
        });
        setShopData(temp);
    }
    const handleNumMinus = (e) => {

        let temp = shopData.map((data) => {
            if (e === data.id) {
                return { ...data, number: data.number > 0 ? data.number - 1 : data.number };
            }
            return data;
        });
        setShopData(temp);
    }
    return (
        <>
            <div className="page-content">
                <PageTitle parentPage="Shop" childPage="Cart" />
                <section className="content-inner shop-account">
                    {/* <!-- Product --> */}
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <table className="table check-tbl">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Product name</th>
                                                <th>Unit Price</th>
                                                <th>File Type</th>
                                              
                                                <th className="text-end">Close</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {console.log("cart=================>>>",cart)}
                                            {cart.length > 0 && cart?.map((data, index) => {
                                                if (data.bookdata) {
                                                   return (
                                                    <tr key={index}>
                                                    <td className="product-item-img"><img src={imageUrl+data.bookdata[0]?.bookIcon} alt="" /></td>
                                                    <td className="product-item-name">{data.bookdata[0]?.bookName}</td>
                                                    <td className="product-item-price">&#8377; {data.bookdata[0]?.sellingPrice}</td>
                                                    {/* <td className="product-item-quantity">
                                                        <div className="quantity btn-quantity style-1 me-3">
                                                            <button className="btn btn-plus" type="button"
                                                                onClick={() => { handleNumPlus(data.id) }}>
                                                                <i className="ti-plus"></i>
                                                            </button>
                                                            <input type="text" className="quantity-input" value={data.number} />
                                                            <button className="btn btn-minus " type="button"
                                                                onClick={() => { handleNumMinus(data.id) }}>
                                                                <i className="ti-minus"></i>
                                                            </button>
                                                        </div>
                                                    </td> */}
                                                    <td className="product-item-totle">{(data.filedata[0]?.fileType)}</td>
                                                    <td className="product-item-close">
                                                        <Link to={"#"} className="ti-close" onClick={()=>removeCart(data)}></Link>
                                                    </td>
                                                </tr>
                                                   )
                                                }
                                               
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            {/* <div className="col-lg-6">
                                <div className="widget">
                                    <form className="shop-form">
                                        <h4 className="widget-title">Calculate Shipping</h4>
                                        <div className="form-group">
                                            
                                            <Form.Select aria-label="Credit Card Type">
                                                <option>Credit Card Type</option>
                                                <option value="1">Cashback credit cards</option>
                                                <option value="2">Travel credit cards.</option>
                                                <option value="3">Business credit cards</option>
                                            </Form.Select>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Credit Card Number" />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input type="text" className="form-control" placeholder="Card Verification Number" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Coupon Code" />
                                        </div>
                                        <div className="form-group">
                                            <Link to={"#"} className="btn btn-primary btnhover" type="button">Apply Coupon</Link>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                            <div className="col-lg-6">
                                <div className="widget">
                                    <h4 className="widget-title">Cart Subtotal</h4>
                                    <table className="table-bordered check-tbl m-b25">
                                        <tbody>
                                            <tr>
                                                <td>Order Subtotal</td>
                                                <td>&#8377; {totalAmountAndQuentity?totalAmountAndQuentity[0]?.totalSellingPrice:'0'}</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>Free Shipping</td>
                                            </tr>
                                           
                                            <tr>
                                                <td>Total</td>
                                                <td>&#8377; {totalAmountAndQuentity?totalAmountAndQuentity[0]?.totalSellingPrice:'0'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="form-group m-b25">
                                        <Link to={"shop-checkout"} className="btn btn-primary btnhover" type="button">Proceed to Checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Product END --> */}
                </section>

            </div>
        </>
    )
}
export default ShopCart;