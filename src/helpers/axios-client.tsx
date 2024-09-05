import React from "react";
import { Platform } from 'react-native'
import axios from "axios";
//import * as SecureStore from "expo-secure-store";
import EncryptedStorage from 'react-native-encrypted-storage';
import { USER_TOKEN_KEY } from "../../src/providers/AuthProvider";

const axiosInstance = axios.create({
    baseURL: Platform.OS === 'android' ? 'http://10.0.2.2/api/' : 'http://localhost/api/',
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json',
        'Accept':  'application/json',
    }
})

axiosInstance.interceptors.request.use(async req => {
    const access_token = await EncryptedStorage.getItem(USER_TOKEN_KEY)
    req.headers.Authorization = `Bearer ${access_token}`
    return req
})

export default axiosInstance