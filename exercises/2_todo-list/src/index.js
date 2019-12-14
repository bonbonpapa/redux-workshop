import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import registerServiceWorker from './registerServiceWorker';

const reducer =  (state, action) => {
    switch (action.type) {
        case "ADDTO": 
        return {todos : state.todos.concat(action.todo)};
        case "REVERSE":
        return {todos : state.todos.slice().reverse()};
        default:
            return state;
        
    }
}
// the initial state need to have the todos property so that the state.todos will work
const store = createStore(reducer, {todos: []}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
