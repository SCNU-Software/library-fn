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

export default {
    buyBook
}