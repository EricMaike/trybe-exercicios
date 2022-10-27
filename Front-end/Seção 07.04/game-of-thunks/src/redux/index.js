import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import personagemReducer from './reducers/personagemReducer';


const store = createStore(personagemReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;