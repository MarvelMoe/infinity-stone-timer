class Timer extends React.Component {

	constructor() {
		super();
		this.state = { timeElapsed: 0 }; // start at 0:00
	}

	componentDidMount() {
		this.timer = setInterval(this.elapsedTime.bind(this), 1000);
		this.setState({ startTime: new Date() });
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	elapsedTime() {

		var timeElapsed = Math.floor((new Date() - this.state.startTime) / 1000);

		this.setState({ timeElapsed: timeElapsed });
		console.log(this); // just in case we want to look under the hood 

		if (this.state.timeElapsed == 5 * 60) {
			document.querySelector(".time").style.opacity = '1';
		}

		if (this.state.timeElapsed == 10 * 60) {
			document.querySelector(".mind").style.opacity = '1';
		}

		if (this.state.timeElapsed == 15 * 60) {
			document.querySelector(".reality").style.opacity = '1';
		}

		if (this.state.timeElapsed == 20 * 60) {
			document.querySelector(".power").style.opacity = '1';
		}

		if (this.state.timeElapsed >= this.props.workingTime * 60) {
			document.querySelector(".space").style.opacity = '1';
			clearInterval(this.timer);
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
			),
			React.createElement(
				"div",
				{ className: "gem-wrapper" },
				React.createElement("div", { className: "gem time" }),
				React.createElement("div", { className: "gem mind" }),
				React.createElement("div", { className: "gem reality" }),
				React.createElement("div", { className: "gem power" }),
				React.createElement("div", { className: "gem space" })
			)
		);
	}
}

ReactDOM.render(React.createElement(Timer, { workingTime: 25 }), document.getElementById('app'));