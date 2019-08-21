import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/*----- Provider : It provides redux data store to react application ------*/
import { Provider } from 'react-redux';
/*----- createStore : datastore where our data stored , applyMiddleware : middleware for performing sertaine actions on data before data going to render on componets ------*/
import { createStore, applyMiddleware } from 'redux';
/*----- promiseMiddleware : it connects middleware to our datastore ------*/
import promiseMiddleware from 'redux-promise';

import App from './App';
import Form from './form';

// REDUCERS : reducers which returns actions wise state changes 
import reducers from './reducers';
// createStoreWithMiddleware : main data sore of our website
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/form" component={Form}/>
            <Route path="/" component={App}/>
          </Switch>
        </div>
      </BrowserRouter>
</Provider>, document.getElementById('root'));