import axios from 'axios'
import {
    AddUser,
    AddOccurrence,
    SignInPayload
} from '../types/api'

const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    },
    responseType: 'json',
})

export const Api = {
    AddUser: async (payload: AddUser): Promise<any> => {
        const req = await api.post(`/users`, payload)
        return req.data
    },

    SignIn: async (payload: SignInPayload): Promise<any> => {
        const req = await api.post(`/sessions`, payload);
        return req.data;
    },

    AddOccurrence: async (payload: AddOccurrence): Promise<any> => {
        const req = await api.post(`/occurrence`, payload)
        return req.data
    },

    GetAllOccurrence: async (): Promise<any> => {
        const req = await api.get(`/occurrence`);
        return req.data;
    }
}

