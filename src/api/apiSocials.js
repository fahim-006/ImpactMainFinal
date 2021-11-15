//facebook crud
import axios from 'axios'
const API = `http://backend1511.impacts.finance/api`; 


export const insertSocialURL = (data) => {
 
    return axios.post(`${API}/create/social`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const getSocialURL = () => {
    return axios.get(`${API}/getall/social`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}


export const updateSocialURL = (data, id) => {
    return axios.put(`${API}/update/social/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const getSocialByIDURL = (data, id) => {
    return axios.put(`${API}/social/getsocialbyid/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const deleteSocialByIDURL = (data, id) => {
    return axios.delete(`${API}/social/deletebyid/${id}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}