import { legacy_createStore as createStore, applyMiddleware , compose } from "redux";
import rootReducer from "./reducers/main";

import thunk from "redux-thunk"

const composeEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer,composeEnhancers )

export default store