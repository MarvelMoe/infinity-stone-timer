class Timer extends React.Component {

	constructor(){
		super();
		this.state = {	timeElapsed: 0  }; 	 // start at 0:00
	}

	componentDidMount() {
		this.timer = setInterval(this.elapsedTime.bind(this),1000)
		this.setState({startTime: new Date()});
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	elapsedTime() {
	
		var timeElapsed = Math.floor((new Date() - this.state.startTime) / 1000);

		this.setState({timeElapsed: timeElapsed});
		 console.log(this);  // just in case we want to look under the hood 
		 
		if(this.state.timeElapsed == 5 * 60) {
			document.querySelector(".time").style.opacity = '1';
		}

		if(this.state.timeElapsed == 10 * 60) {
			document.querySelector(".mind").style.opacity = '1';
		}

		if(this.state.timeElapsed == 15 * 60) {
			document.querySelector(".reality").style.opacity = '1';
		}

		if(this.state.timeElapsed ==  20 * 60) {
			document.querySelector(".power").style.opacity = '1';
		}

		if(this.state.timeElapsed >= this.props.workingTime * 60) {
			document.querySelector(".space").style.opacity = '1';
			clearInterval(this.timer);
			alert("Break Time !");
		}

	}




	render() {

		return(

			<div className="container">

				<h1> Infinity Timer </ h1>
				 
				<h2>This timer runs for {this.props.workingTime} minutes </ h2>		 
			
				<h3>Time Elapsed: {this.state.timeElapsed} </ h3>

				 <div className="gem-wrapper">
				 	<div className="gem time"></div>
				    <div className="gem mind"></div>
				    <div className="gem reality"></div>
				    <div className="gem power"></div>
				    <div className="gem space"></div>
				</div>

		   </div>

		)
	}
}


ReactDOM.render(

	<Timer workingTime={25} />, 	document.getElementById('app')

);