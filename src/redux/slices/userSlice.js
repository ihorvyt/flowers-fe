import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser  =
    createAsyncThunk('users/getUser',
        async ({token}) => {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${import.meta.env.VITE_API_KEY}/users/info`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            try {
                const {data} = await axios.request(config);
                return data;
            } catch (error) {
                console.error('Error', error);
                return null;
            }
        })

export const logUser  =
    createAsyncThunk('users/logUser',
        async ({email, password}) => {
    let data = JSON.stringify({
        "email": email,
        "password": password
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_API_KEY}/auth/authenticate`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    try {
        const {data} = await axios.request(config);

        return data.access_token;
    } catch (error) {
        console.error('Error', error);
        return null;
    }
})

export const regUser  =
    createAsyncThunk('users/regUser',
        async ({firstName, lastName, email, password}) => {

    let data = JSON.stringify({
        "firstname": firstName,
        "lastname": lastName,
        "email": email,
        "password": password,
        "role": "USER"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_API_KEY}/auth/register`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    try {
        const {data} = await axios.request(config);
        return data
    } catch (error) {
        console.error('Errorr', error);
        return null;
    }
})

const initialState = {
    token: null,

    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        setToken(state, action) {
            state.token = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // logUser cases
            .addCase(logUser.pending, (state) => {
                state.token = null;
            })
            .addCase(logUser.fulfilled, (state, action) => {
                state.token = action.payload;
            })
            .addCase(logUser.rejected, (state) => {
                state.token = null;
            })

            // regUser cases
            .addCase(regUser.pending, (state) => {
                state.token = null;
            })
            .addCase(regUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
            })
            .addCase(regUser.rejected, (state) => {
                state.token = null;
            })

            // getUser cases
            .addCase(getUser.pending, (state) => {
                state.id = '';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.id = action.payload.id;
            })
            .addCase(getUser.rejected, (state) => {
                state.id = '';
            });
    }
})

export const { setUserInfo, setToken} = userSlice.actions;

export default userSlice.reducer