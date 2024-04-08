const { createSlice, nanoid } = require("@reduxjs/toolkit")

const initialState = {
    todos: []
}

const Slice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTask : (state,action) => {
            const data = { 
                id: nanoid(),
                name :action.payload 
            };
            state.todos.push(data)
        }
    }
});

export const { addTask } = Slice.actions;
export default Slice.reducer;