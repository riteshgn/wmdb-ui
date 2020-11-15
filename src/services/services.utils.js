import axios from 'axios';

async function _sendRequest({ method, url, data }) {
    try {
        const response = await axios({ method, url, data });
        // console.log(`[${method} ${url}] \n ${JSON.stringify(response.data)}`);
        return response.data;
    }
    catch (error) {
        console.log(`[${method} ${url}] ${error}`);
        return null;
    }
}

function get(url) {
    return _sendRequest({ method: 'get', url });
}

const ServiceUtils = {
    get
}

export default ServiceUtils;