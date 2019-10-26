import React from "react";

class Weather_card extends React.Component{

	render(){
		var data = this.props.data;
		return(
			<div className="card">
				 {data.city && data.country && 
					<div><b>
						<pre>Location: {data.city},{data.country}   Time: {data.time}</pre>
						<pre>Min. Temp: {data.temp_min}<span>&#8451;</span>   Max. Temp: {data.temp_max}<span>&#8451;</span></pre>
						<pre>humidity: {data.humidity}<span>%</span>    conditions: {data.description}</pre>
					</b></div> 
				}
				{this.props.error && <p>{ this.props.error }</p>}
				<br/>
			</div>
		);
	}
}
export default Weather_card;
