import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';

class App extends React.Component {
    state = initialData;
    render() {
        return this.state.columnOrder.map((columnId) => {
            
        })
    }


}


ReactDOM.render(<App />, document.getElementById('root'));

