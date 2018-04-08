class Timer extends React.Component {

	constructor() {
		super();
		this.state = {
			timeElapsed: 0
		};
	}

	componentDidMount() {
		this.interval = setInterval(this.elapseTime.bind(this), 1000);
		this.setState({ start: new Date() });
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	elapseTime() {

		var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);

		this.setState({ timeElapsed: timeElapsed });
		console.log(this);

		if (this.state.timeElapsed >= this.props.workingTime * 60) {
			clearInterval(this.interval);
			alert("Break Time !");
		}
	}

	render() {

		return React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"h1",
				null,
				" Infinity Timer "
			),
			React.createElement(
				"h2",
				null,
				"This timer runs for ",
				this.props.workingTime,
				" minutes "
			),
			React.createElement(
				"h3",
				null,
				"Time Elapsed: ",
				this.state.timeElapsed,
				" "
			)
		);
	}
}

ReactDOM.render(React.createElement(Timer, { workingTime: 20 }), document.getElementById('app'));