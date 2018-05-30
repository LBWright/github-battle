import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';

class Results extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			winner: null,
			loser: null,
			error: null,
			loading: true
		}
	}

	componentDidMount () {
		let players = queryString.parse(this.props.location.search);
		api.battle([
			players.playerOneName,
			players.playerTwoName,
		]).then(function(results){
			if (results === null){
				return this.setState(function (){
					return {
						error: 'There was an error. Check that both users exist on Github',
						loading: false
					}
				})
			};
			
			this.setState(function() {
				return {
					error: null,
					winner: results[0],
					loser: results[1],
					loading: false
				}
			});
		}.bind(this));
	}
	render(){
		let error = this.state.error;
		let winner = this.state.winner;
		let loser = this.state.loser;
		let loading = this.state.loading;

		if (loading === true){
			return <p>Loading...</p>
		}
		return (
			<div>
				Results
			</div>
		)
	}
}

module.exports = Results;