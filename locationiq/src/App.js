import React, { Component } from 'react';
import axios from 'axios';

export class App extends Component {

  constructor(props){
    super(props);
    this.state={
     name11:'',
      longitude:'',
      latitude:''
    }
  }

  changename11=(e)=>{
    this.setState({
      name11:e.target.value
      })
  }
  resultdata=async (e)=>{
    e.preventDefault()
    let axiosResponse= await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.ce50de5c08b4e8b18249e44263787355&city=${this.state.name11}&format=json`)
    this.setState({
      name11:axiosResponse.data[0].display_name,
      longitude:axiosResponse.data[0].lon,
      latitude:axiosResponse.data[0].lat
    })
   
  }
  render() {
    return (
      <div>
        <form onSubmit={this.resultdata}>
          <input type='text' placeholder='city name....' onChange={(e)=>{this.changename11(e)}} />
          <button>Explore</button>
        </form>
        <h1>{this.state.name11}</h1>
        <h1>{this.state.longitude}</h1>
        <h1>{this.state.latitude}</h1>
      </div>
    )
  }
}

export default App