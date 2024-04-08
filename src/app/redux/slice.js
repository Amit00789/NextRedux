const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    userApiData: [],
    users: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem('users')) : [] : [],
}

export const apiUserData = createAsyncThunk("apiUserData", async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json()
})

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id : nanoid(),
                name: action.payload
            }
            state.users.push(data)
            const userData = JSON.stringify(current(state.users));
            localStorage.setItem("users", userData)
        },
        deleteUser: (state, action) => {
            const data = {
                id: action.id
            }
            state.users.pop(data)
            const userData = JSON.stringify(current(state.users));
            localStorage.setItem("users", userData)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(apiUserData.fulfilled, (state,action) => {
            state.userApiData = action.payload
        })
    }
});

export const { addUser, deleteUser } = Slice.actions;
export default Slice.reducer;