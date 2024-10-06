import * as curd from "./curd"
import * as dataUrl  from "./dataurl"

export const addTypingForm = async(data) => {
    const { MainUrl, endPoint } = dataUrl;
    const url = MainUrl + endPoint.addTypingForm;
    let token = localStorage.getItem("token")
    console.log("token",token)
 const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`
};
    return await curd.post(url,data,headers)
}