import React from 'react';
import PropTypes from 'prop-types';

let styles = {
	content:{
		textAlign: 'center',
		fontSize: '35px'
	}	
};

class Loading extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			text: this.props.text
		}
	}
	componentDidMount(){
		let stopper = this.props.text + '...';
		this.interval = window.setInterval(function(){
			if (this.state.text === stopper){
				this.setState(function(){
					return {
						text: this.props.text
					}
				})
			} else {
				this.setState(function(prevState){
					return {
						text: prevState.text + '.'
					}
				})
			}
		}.bind(this), this.props.speed)
	}
	componentWillUnMount(){
		window.clearInterval(this.interval);
	}
	render(){
		return(
			<p style={styles.content}>
				{this.state.text}
			</p>
		)
	}
}

Loading.propTypes = {
	text: PropTypes.string.isRequired,
	speed: PropTypes.number.isRequired
}
Loading.defaultProps = {
	text: 'Loading',
	speed: 300
}
module.exports = Loading;