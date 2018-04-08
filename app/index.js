class Timer extends React.Component {

	constructor(){
		super();
		this.state = {
			timeElapsed: 0
		};
	}

	componentDidMount() {
		this.interval = setInterval(this.elapseTime.bind(this),1000)
		this.setState({start: new Date()});
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	elapseTime() {
	
		var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);

		this.setState({timeElapsed: timeElapsed});
		console.log(this);
	
		if(this.state.timeElapsed >= this.props.workingTime * 60) {
			clearInterval(this.interval);
			alert("Break Time !");
		}

	}




	render() {

		return(

			<div className="container">

			<h1> Infinity Timer </ h1>
			 
			<h2>This timer runs for {this.props.workingTime} minutes </ h2>		 
		
			<h3>Time Elapsed: {this.state.timeElapsed} </ h3>

			</div>

		)
	}
}


ReactDOM.render(

	<Timer workingTime={20} />, 	document.getElementById('app')

);