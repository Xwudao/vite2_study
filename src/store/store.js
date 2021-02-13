import {createStore, createLogger} from "vuex";
import state from "./state";
import mutations from "./mutations";

const store = createStore({
    state,
    mutations,
    plugins: process.env.NODE_ENV !== 'production'
        ? [createLogger()]
        : []
})


export default store
