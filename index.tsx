import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import Table from './components/Table';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sumit'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Table month="Feb" saving="$500"/>
      </div>
    );
  }
}

//Spread / rest operator 

let a = [1,2,3];
let b = [...a,4];
console.log(a);
console.log(b);

let data = {fname:'Sumit'};
let data1 = Object.assign({},data,{lname:'kharche'})
console.log(data);
console.log(data1);

let obj5 = {
  firstName:'Sumit',
  lastName:'Kharche',
  address:'Pune',
  gender:'Male'
};

let {firstName: fName, lastName: lName, ...newdata } = obj5; 
console.log(fName);
console.log(lName);
console.log(newdata);



render(<App />, document.getElementById('root'));
