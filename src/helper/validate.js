import { toast } from "react-hot-toast";


export async function fullname(values){
    const error = fullnameVerify(  {} , values)
    return error
}

// ** validate full name**

function fullnameVerify(error = {} ,values){
    if(!values.fullname){
        error.fullname =toast.error('fullname Required....!');

    }else if(values.fullname.includes('')){
        error.fullname = toast.error('Invalid fullname.....!')
    }
    return error;
}