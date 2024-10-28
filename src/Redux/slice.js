import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    countNVItem1: 0,
    countNVItem2: 0,
    countNVItem3: 0,
    countNVItem4: 0,
    countNVItem5: 0,
    countNVItem6: 0,
    countNVItem7: 0,
    countNVItem8: 0,
    countNVItem9: 0,
    countNVItem10: 0,
    countVItem1: 0,
    countVItem2: 0,
    countVItem3: 0,
    countVItem4: 0,
    countVItem5: 0,
    countVItem6: 0,
    countVItem7: 0,
    countVItem8: 0,
    countVItem9: 0,
    countVItem10: 0,
    totalItems: [],
}

const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setCountNVItem1: (state, action) => {
            state.countNVItem1 = action.payload;
        },
        setCountNVItem2: (state, action) => {
            state.countNVItem2 = action.payload;
        },
        setCountNVItem3: (state, action) => {
            state.countNVItem3 = action.payload;
        },
        setCountNVItem4: (state, action) => {
            state.countNVItem4 = action.payload;
        },
        setCountNVItem5: (state, action) => {
            state.countNVItem5 = action.payload;
        },
        setCountNVItem6: (state, action) => {
            state.countNVItem6 = action.payload;
        },
        setCountNVItem7: (state, action) => {
            state.countNVItem7 = action.payload;
        },
        setCountNVItem8: (state, action) => {
            state.countNVItem8 = action.payload;
        },
        setCountNVItem9: (state, action) => {
            state.countNVItem9 = action.payload;
        },
        setCountNVItem10: (state, action) => {
            state.countNVItem10 = action.payload;
        },
        setCountVItem1: (state, action) => {
            state.countVItem1 = action.payload;
        },
        setCountVItem2: (state, action) => {
            state.countVItem2 = action.payload;
        },
        setCountVItem3: (state, action) => {
            state.countVItem3 = action.payload;
        },
        setCountVItem4: (state, action) => {
            state.countVItem4 = action.payload;
        },
        setCountVItem5: (state, action) => {
            state.countVItem5 = action.payload;
        },
        setCountVItem6: (state, action) => {
            state.countVItem6 = action.payload;
        },
        setCountVItem7: (state, action) => {
            state.countVItem7 = action.payload;
        },
        setCountVItem8: (state, action) => {
            state.countVItem8 = action.payload;
        },
        setCountVItem9: (state, action) => {
            state.countVItem9 = action.payload;
        },
        setCountVItem10: (state, action) => {
            state.countVItem10 = action.payload;
        },
        setInvoiceDataReducer: (state, action) => {
            state.totalItems = action.payload;
        },
        removeItemFromCart: (state, action) => {
            const itemId = action.payload;
            const item = state.totalItems.find(item => item.id === itemId);
            if (item) {
                item.quantity = 0;
                if (item.quantity <= 0) {
                    state.totalItems = state.totalItems.filter(item => item.id !== itemId);
                }
            }
        },
    }
});

// Export actions
export const { removeItemFromCart, setInvoiceDataReducer, setCountNVItem1, setCountNVItem2, setCountNVItem3, setCountNVItem4, 
    setCountNVItem5, setCountNVItem6, setCountNVItem7, setCountNVItem8, setCountNVItem9, setCountNVItem10, 
    setCountVItem1, setCountVItem2, setCountVItem3, setCountVItem4, setCountVItem5, 
    setCountVItem6, setCountVItem7, setCountVItem8, setCountVItem9, setCountVItem10 } = slice.actions;
// Export the reducer
export default slice.reducer;