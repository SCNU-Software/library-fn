import axios from 'axios';

async function buyBook(buyBookInfo) {
    const { userName, bookTitle, price, address, phone, card } = buyBookInfo;
    let result;
    try{
        result = await axios.post(
            'http://fisher.lazybone.xyz/library/api/order/addorder', { 
                userName,
                bookTitle,
                price,
                address,
                phone,
                card
            }
        );
    }catch(err){
        throw err;
    }
    return result.data;
}

async function getOrder(userName) {
    let result;
    try{
        result = await axios.get(`http://fisher.lazybone.xyz/library/api/order/getorder?userName=${userName}&pageNo=1&pageSize=10`);
    }catch(err){
        throw err;
    }
    return result.data;
}

async function alterOrder(orderId) {
    let result;
    try{
        result = await axios.post('http://fisher.lazybone.xyz/library/api/order/alterorder', {
            "orderId": orderId,
            "status": 1
        });
    }catch(err){
        throw err;
    }
    return result.data;
}

export default {
    buyBook,
    getOrder,
    alterOrder
}