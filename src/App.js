import React,{Component} from 'react';
import axios from 'axios'
import Person from './Person'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      data: [],
    }

  }

  componentDidMount(){

    axios('https://api.randomuser.me/?results=10')
      .then(response => this.setState({data:response.data.results}))
      .catch(error => console.error(error))
  }

  render(){
    return (
      <div className="App">
         <h1>todo randomppl</h1>
         {(this.state.data === [])?<span>loading...</span>
           :<ul>{this.state.data.map((item,index) => <li key={index}>{Person(item)}</li> )}</ul>
         }
      </div>
  )}
}

export default App;
