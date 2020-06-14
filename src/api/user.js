import axios from 'axios';

async function register(userName, userPassword) {
    let result;
    try{
        result = await axios.post(
            'http://fisher.lazybone.xyz/library/api/user/register', { 
                userName,
                userPassword
            }
        );
    }catch(err){
        throw err;
    }
    return result.data;
}

export default {
    register
}