import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDayBills = createAsyncThunk('fetchDayBills/post', async() => {
    const totalDayBills = await axios.get('http://localhost:3000/getBills');
    return totalDayBills.data;
});

export const fetchAddBills = createAsyncThunk('fetchAddBills/get', async(reqPayload) => {
    const storedBillId = await axios.post('http://localhost:3000/addbill', reqPayload)
    return storedBillId.data;
});