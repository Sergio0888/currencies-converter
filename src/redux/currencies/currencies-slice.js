import { createSlice } from '@reduxjs/toolkit';
import { getChange, getCurrentRates } from './currencies-operations';

const initialState = {
    data: {},
    rates: {},
    loading: false,
    error: null,
  };

const currenciesSlice = createSlice({
    name: "currencies",
    initialState,
    extraReducers: {
        [getChange.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [getChange.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.data = payload;
        },
        [getChange.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [getCurrentRates.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [getCurrentRates.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.rates = payload;
        },
        [getCurrentRates.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    }
});

export default currenciesSlice.reducer;