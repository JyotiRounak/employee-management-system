import axios from "axios";

import { Employee } from "../types/employee";


const APP_URL = "http://127.0.0.1:5000";

export const addEmployee = (data: Employee) => {
    return axios.post<Employee>(`${APP_URL}/employee`, data)
}

export const fetchEmployee = () => {
    return axios.get<Employee[]>(`${APP_URL}/employee`);
}

export const deleteEmployee = (id: number) => {
    return axios.delete(`${APP_URL}/employee/${id}`)
}