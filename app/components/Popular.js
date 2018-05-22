const React = require('react');

class Popular extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedLanguage: 'All'
		}
	}
	updateLanguage(language){
		this.setState(function() {
			return {
				selectedLanguage: language
			}
		})
		this.updateLanguage = this.updateLanguage.bind(this);
	}
	render() {
		let languages = ['All', 'Javascript', 'Python', 'Ruby', 'Java', 'CSS'];

		return(
			<ul className="languages">
				{languages.map(language => {
					return (
						<li 
						key={language}>
						{language}
						</li>
					) 
				})}
			</ul>
		);
	}
}

module.exports = Popular;