import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { Employee } from "../types/employee";
import * as api from '../api/EmployeeApi';

export const createEmployee = createAsyncThunk(
    'employee/create',
    async(employee: Employee)=>{
        const response = await api.addEmployee(employee);
        return response.data;
    }
);
export const getEmployee = createAsyncThunk(
    'employee/get',
    async()=>{
        const response = await api.fetchEmployee();
        console.log("response", response);           // full response
console.log("response.data", response.data); // body
console.log("typeof", typeof response.data);
        return response.data;
    }
);

export const delEmployee = createAsyncThunk(
    'employee/delete',
    async(id: number)=>{
        await api.deleteEmployee(id);
        return id;
    }
)

const employeeSlice = createSlice({
    name: 'employee',
    initialState: { list: [] as Employee[] },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createEmployee.fulfilled, (state, action: PayloadAction<Employee>)=>{
            state.list.push(action.payload);
        })
        .addCase(getEmployee.fulfilled, (state, action: PayloadAction<Employee[]>)=>{
            state.list = action.payload;
         })
        .addCase(delEmployee.fulfilled, (state, action: PayloadAction<number>)=>{
            state.list = state.list.filter(emp => emp.id !== action.payload);
        });
    },
});

export default employeeSlice.reducer;

