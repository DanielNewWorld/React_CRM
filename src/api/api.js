import axios from "axios";

const baseURL = 'https://main--relaxed-froyo-db7aba.netlify.app/api';

export const authAPI = {
    async me(login, password) {
        const basicAuthCredentials = btoa(`${login}:${password}`);
        return await axios.get(`${baseURL}/auth/me`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Basic ${basicAuthCredentials}`,
                }
            }
        );
    },

    async login(login, password, rememberMe = false) {
        const data = {
            login: login,
            password: password,
            rememberMe: false
        };

        return await axios.post(`${baseURL}/auth/login`, data,
            {withCredentials: true});
    },

    async logout() {
        return await axios.delete(`${baseURL}/auth/logout`,
            {withCredentials: true});
    }
}

export const usersAPI = {
    async getUsers(login, password, currentPage = 1, pageSize = 10, firstname = '') {
        // console.log("login-pass: " + login + "  " + password)
        const find = 'firstname=' + firstname

        const basicAuthCredentials = btoa(`${login}:${password}`);
        const instance = axios.create({
            withCredentials: true,
            baseURL: baseURL,
            headers: {
                'Authorization': `Basic ${basicAuthCredentials}`,
            },
        })

        try {
            const response = await instance.get(`?page=${currentPage}&pageSize=${pageSize}&${find}`)
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },

    async addUsers(login, password, currentPage = 1, pageSize = 10, formData) {
        const basicAuthCredentials = btoa(`${login}:${password}`);
        const instance = axios.create({
            withCredentials: true,
            baseURL: baseURL,
            headers: {
                'Authorization': `Basic ${basicAuthCredentials}`,
            },
        })

        try {
            const response = await instance.post(`?page=${currentPage}&pageSize=${pageSize}`,
                formData);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },

    async deleteUsers(login, password, currentPage = 1, pageSize = 10, firstname, id) {
        const basicAuthCredentials = btoa(`${login}:${password}`);
        const instance = axios.create({
            withCredentials: true,
            baseURL: baseURL,
            headers: {
                'Authorization': `Basic ${basicAuthCredentials}`,
            },
        })

        try {
            const response = await instance.delete(`${id}?page=${currentPage}&pageSize=${pageSize}`);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },

    async updateUsers(login, password, currentPage = 1, pageSize = 10, dataForm, id) {
        const basicAuthCredentials = btoa(`${login}:${password}`);
        const instance = axios.create({
            withCredentials: true,
            baseURL: baseURL,
            headers: {
                'Authorization': `Basic ${basicAuthCredentials}`,
            },
        })

        const endpoint = "/" + id;

        // console.log(currentPage + "   " + pageSize + "   " + firstname + "   " + id)
        try {
            const response = await instance.put(`${endpoint}?page=${currentPage}&pageSize=${pageSize}`,
                dataForm);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}