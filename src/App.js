import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './components/Cart';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Shopping Cart</h1>
                <Cart />
            </div>
        </Provider>
    );
}

export default App;

