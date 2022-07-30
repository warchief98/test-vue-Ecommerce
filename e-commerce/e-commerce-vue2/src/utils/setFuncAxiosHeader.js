import axios from "axios";

//with this function and register it in your COMPONENT, you'll be able to call setHeader in your axios to have
 //Authorization and value of it will be SetHeader(argument)

const setHeader = (token) => {
    if(token){
        axios.defaults.headers = {
            Authorization : token,
        }
    }else{
        delete axios.defaults.headers.Authorization;
    }
}

export default setHeader;