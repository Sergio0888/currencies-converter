import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { getConvert, getRates } from '../../api/currencies';

export const getChange = createAsyncThunk(
    "change",
    async (data, { rejectWithValue }) => {
        try {
           const response = await getConvert(data);
           if(!response.success) {
            Notiflix.Report.failure('You entered incorrect data', 'Please enter "15 usd in uah", "200 eur in usd"', 'Ok');
           }
           return response;
        } 
        catch (error) {
           return rejectWithValue(error);
        }
    }
)

export const getCurrentRates = createAsyncThunk(
    "rates",
    async (data, { rejectWithValue }) => {
        try {
           const response = await getRates(data);
           return response;
        } 
        catch (error) {
           return rejectWithValue(error);
        }
    }
)