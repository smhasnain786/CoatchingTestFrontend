import * as curd from "./curd"
import * as dataUrl from "./dataurl"

export const getAllOrdersOfUser = async (data) => {
    const { MainUrl, endPoint } = dataUrl;
    const url = MainUrl + endPoint.getUserOrders;
    let token = localStorage.getItem("token")
    const headers = {
        'Content-Type': 'application/json',
        'Authorization':token
    };
    return await curd.post(url, data, headers)
}