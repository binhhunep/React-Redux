import { rootReducer } from "./RootReducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhencers = composeWithDevTools(); //thu vien co the kiem tra thay doi cuar globle state treen ui
const reduxStore = createStore(rootReducer, composeEnhencers);
export { reduxStore };
