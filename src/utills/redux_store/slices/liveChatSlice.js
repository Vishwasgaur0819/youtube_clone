import { createSlice } from '@reduxjs/toolkit';

let liveChatSlice = createSlice({
    name: 'livechat',
    initialState: {
        messages: [],
    },
    reducers: {
        storeLiveChats: (state, action) => {
            state.messages.splice(25, 1)   // for limiting the chat to 25 chats only
            state.messages.unshift(action.payload)
        }
    }
})

export const { storeLiveChats } = liveChatSlice.actions;
export default liveChatSlice.reducer;