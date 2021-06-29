import React, { Component } from 'react';

import Alertmesge from './alertmesge';

import Image from 'react-bootstrap/Image'
import axios from 'axios';




export class App extends Component {

  constructor(props){
    super(props);
    this.state={
     name11:'',
      longitude:'',
      latitude:'',
      error:'',
      display:false
    }
  }

  changename11=(e)=>{
    this.setState({
      name11:e.target.value
      })
  }
  resultdata=async (e)=>{
    e.preventDefault()
    try{
    let axiosResponse= await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.ce50de5c08b4e8b18249e44263787355&city=${this.state.name11}&format=json`)
    this.setState({
      name11:axiosResponse.data[0].display_name,
      longitude:axiosResponse.data[0].lon,
      latitude:axiosResponse.data[0].lat,
      alert:false,
    display:true


    
    })

  }catch (error){
    this.setState({
      error:"please enter name city  .....!!  ",
      alert:true,
     display:false,
    })
  }

}
  
  
  render() {
    return (
      <div>
        
     
     < Alertmesge alert={this.state.alert}
      error={this.state.error}/>
        <form onSubmit={this.resultdata}>
          <input type='text' placeholder='city name....' onChange={(e)=>{this.changename11(e)}} />
          <button>Explore</button>
         
        </form>
        {this.state.display&&
         <div>
         <h1>
           {this.state.name11}
         </h1>
         <h1>
           {this.state.longitude}
         </h1>
         <h1>
           {this.state.latitude}
         </h1>
         <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.ce50de5c08b4e8b18249e44263787355&center=${this.state.latitude},${this.state.longitude}&zoom=12`} />
         
       </div>
     }
   </div>
 )
}
}
export default App