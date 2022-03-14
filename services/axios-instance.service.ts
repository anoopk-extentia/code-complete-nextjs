/**
 * FileName: axios-instance.service.ts\
 * Description: This file contains the axios interceptors for making api calls\
 * Extentia: Copyright (c) 2022
 */

import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const defaultOptions = {
    baseURL: `${REACT_APP_BASE_URL}`,
};

const axiosInstance = axios.create(defaultOptions);

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem('token');
    config.headers!['Authorization'] = token ? `Bearer ${token}` : '';

    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    const expectedError =
        error.response && error.response.status >= 400 && error.response.status <= 500;

    if (!expectedError) {
        return Promise.reject({
            data: null,
            success: false,
            status: error.response?.status,
            message: error.response?.data?.message || error.message,
        });
    }
    if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
    }

    return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);

axiosInstance.interceptors.response.use(onResponse, onResponseError);

export { axiosInstance };
