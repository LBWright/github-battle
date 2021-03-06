const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

//import components
const Popular = require('./Popular');
const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle')
const Results = require('./Results')


class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/popular" component={Popular} />
						<Route exact path="/battle" component={Battle} />
						<Route path='/battle/results' component={Results} />
						<Route render={function() {
							return <h2>Page Not Found</h2>
						}} />
					</Switch>		
				</div>
			</Router>
		)
	}
}

module.exports = App;