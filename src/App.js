import React from "react";
import Search_box from "./Search_box";
import Weather_card from "./Weather_card";
import './App.css'

const API_KEY ="cd0476bdb516b0d37f5a66b6c3525086";

class App extends React.Component{
	state ={
    temp_min: undefined,
    temp_max: undefined,
    time: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    listp: []
  }
  getWeather= async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    const data = await api_call.json();

    if(data.name !== undefined){
      console.log(this.state.listp);
      var content={temp_min: Math.floor(data.main.temp_min-273),
		    temp_max: Math.floor(data.main.temp_max-273),
		    time: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()),
	        city : data.name,
	        country: data.sys.country,
	        humidity : data.main.humidity,
	        description: data.weather[0].description,
	        error:""
	    }
	    var new_list = this.state.listp;
	    new_list.unshift(content);
      this.setState({
        listp: new_list
      });

    }
    else{
      this.setState({
      	temp_min: undefined,
	    temp_max: undefined,
	    time: undefined,
	    city: undefined,
	    country: undefined,
	    humidity: undefined,
	    description: undefined,
      	error: "please enter the names"
    });
    }
  }
	render(){
		return(
			<div>
				<h1 className="Header">Weather App</h1><hr/>

				<Search_box getWeather={this.getWeather}/>
				{this.state.listp.map(elem => {
					return <Weather_card data={elem}/>;
				})}
				<hr/>
				<p className="footer"> &#169; created by <b>Ranjeet Kumar</b></p>
			</div>
			);
	}
}
export default App;