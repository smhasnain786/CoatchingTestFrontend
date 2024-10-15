import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

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
    const [responseId, setResponseId] = React.useState("");
    const [responseState, setResponseState] = React.useState([]);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");

            script.src = src;

            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script);
        })
    }

    const createRazorpayOrder = (amount) => {
        let data = JSON.stringify({
            amount: amount * 100,
            currency: "INR"
        })

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://localhost:8002/order/create-order",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            },
            data: data
        }

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data))
                handleRazorpayScreen(response.data)
            })
            .catch((error) => {
                console.log("error at", error)
            })
    }

    const handleRazorpayScreen = async (data) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("Some error at razorpay screen loading")
            return;
        }

        const options = {
            key: 'rzp_test_fOGZE2lz3ypiZ6',
            amount: data.amount,
            currency: 'INR',
            name: "Coaching Test & Notes",
            description: "payment to Coaching Test & Notes",
            image: "https://www.coachingtest.com/static/media/logo.fa29538bb80cc6b5e06e.png",
            order_id: data.order_id,
            callback_url: 'http://localhost:3000/my-orders',
            handler: function (response) {
                setResponseId(response.razorpay_payment_id)
                console.log(response);

                response = { ...response, userId: data.userId, vendorId: "1234", products: cart, amount: data.amount }
                let config = {
                    method: "post",
                    maxBodyLength: Infinity,
                    url: "http://localhost:8002/order/add-orders",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem("token")
                    },
                    data: response
                }

                axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response))
                        if (response.status) {
                            cart.map((val)=>{
                                removeCart({_id:val._id})
                            })
                            
                            window.location.href="/my-order"
                        }

                    })

            },
            prefill: {
                name: localStorage.getItem("name"),
                email: localStorage.getItem("emailId"),
            },
            theme: {
                color: "#F37254"
            }
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    const paymentFetch = (e) => {
        e.preventDefault();

        const paymentId = e.target.paymentId.value;

        axios.get(`http://localhost:5000/payment/${paymentId}`)
            .then((response) => {
                console.log(response.data);
                setResponseState(response.data)
            })
            .catch((error) => {
                console.log("error occures", error)
            })
    }

    // useEffect(() => {
    //   let data = JSON.stringify({
    //     amount: amount * 100,
    //   })

    //   let config = {
    //     method: "post",
    //     maxBodyLength: Infinity,
    //     url: `http://localhost:5000/capture/${responseId}`,
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     data: data
    //   }

    //   axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data))
    //   })
    //   .catch((error) => {
    //     console.log("error at", error)
    //   })
    // }, [responseId])



    useEffect(() => {
        getCartDetails()
        getTotalAmount()
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
                                            {console.log("cart=================>>>", cart)}

                                            {
                                                cart.length > 0 && cart?.map((data, index) => {
                                                    if (data.bookdata) {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="product-item-img"><img src={imageUrl + data.bookdata[0]?.bookIcon} alt="" /></td>
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
                                                                <td className="product-item-totle">{(data.filedata[0]?.fileType)?.toUpperCase()}</td>
                                                                <td className="product-item-close">
                                                                    <Link to={"#"} className="ti-close" onClick={() => removeCart(data)}></Link>
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

                            <div className="col-lg-6">
                                <div className="widget">
                                    <h4 className="widget-title">Cart Subtotal</h4>
                                    <table className="table-bordered check-tbl m-b25">
                                        <tbody>
                                            <tr>
                                                <td>Order Subtotal</td>
                                                <td>&#8377; {totalAmountAndQuentity ? totalAmountAndQuentity[0]?.totalSellingPrice : '0'}</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>Free Shipping</td>
                                            </tr>

                                            <tr>
                                                <td>Total</td>
                                                <td>&#8377; {totalAmountAndQuentity ? totalAmountAndQuentity[0]?.totalSellingPrice : '0'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="form-group m-b25">
                                        <button
                                            onClick={() => createRazorpayOrder(parseInt(totalAmountAndQuentity ? totalAmountAndQuentity[0]?.totalSellingPrice : 0, 10))}
                                            className="btn btn-primary btnhover"
                                            type="button"
                                        >
                                            Proceed to Checkout
                                        </button>


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