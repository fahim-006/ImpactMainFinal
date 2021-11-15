import axios from 'axios'
const API = `http://backend1511.impacts.finance/api`; 
const APIImage = `https://backendimage1.impacts.finance/api/post`; 


export const insertBuy = (data) => {
 
    return axios.post(`${API}/create/buy`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const getAllSocial = () => {
    return axios.get(`${API}/getall/social`, {
    })
}

export const getAllCause = () => {
    return axios.get(`${API}/getall/cause`, {
    })
}

export const getAllTerm = () => {
    return axios.get(`${API}/getall/term`, {
    })
}

export const getAllPolicy = () => {
    return axios.get(`${API}/getall/policy`, {
    })
}

export const getAllBuyPhase = () => {
    return axios.get(`${API}/getall/buyphase`, {
    })
}

export const getAllToken = () => {
    return axios.get(`${API}/getall/tokenpage`, {
    })
}


export const getAllHomeHead = () => {
    return axios.get(`${API}/getall/homepagehead`, {
    })
}

export const getAllHomeHeadCards = () => {
    return axios.get(`${API}/getall/homethreecards`, {
    })
}

export const getAllPhaseList = () => {
    return axios.get(`${API}/getall/homephaselist`, {
    })
}

export const getAllGreenpaper = () => {
    return axios.get(`${APIImage}/greenpaper`, {
    })
}

export const getAllCarousel = () => {
    return axios.get(`${APIImage}/carousel`, {
    })
}

export const getAllPartner = () => {
    return axios.get(`${APIImage}/partner`, {
    })
}


export const getAllDonate = () => {
    return axios.get(`${APIImage}/donate`, {
    })
}






