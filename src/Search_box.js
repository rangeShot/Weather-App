import React from "react";

class Search_box extends React.Component{
	render(){
		return(
			<form onSubmit={this.props.getWeather}>
			<input type="text" name="city" placeholder="Enter city..."/>
			<button className="btn btn-outline-info"> Get Weather</button>

			</form>
			);
	}
}
export default Search_box;
