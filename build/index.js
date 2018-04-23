

class Timer extends React.Component {

	constructor() {
		super();
		this.state = { time: 2500, seconds: 25 * 60, started: false };
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.breakTimer = this.breakTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}

	secondsToTime(secs) {
		let hours = Math.floor(secs / (60 * 60));

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		// add a zero if seconds are less than 10
		if (seconds < 10) seconds = '0' + Math.ceil(divisor_for_seconds);
		// Check if we're at zero.
		if (seconds == 0 && minutes == 0) {
			clearInterval(this.timer);
		}

		let obj = {
			"h": hours,
			"m": minutes,
			"s": seconds
		};
		return obj;
	}

	componentDidMount() {
		let timeLeft = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeft });
	}

	startTimer() {
		this.timer = setInterval(this.countDown, 1000);
		this.setState({ started: true });
	}

	stopTimer() {
		clearInterval(this.timer);
		this.setState({ started: false });
	}

	resetTimer() {
		clearInterval(this.timer);
		this.timer = setInterval(this.countDown, 1000);
		this.setState({ seconds: 1500 + 1 });
	}

	breakTimer() {
		clearInterval(this.timer);
		this.timer = setInterval(this.countDown, 1000);
		this.setState({ seconds: 60 * 5 + 1 });
	}

	countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = this.state.seconds - 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds
		});

		let timeElapsed = this.state.seconds;

		this.setState({ timeElapsed: timeElapsed });

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
				"button",
				{ className: "btn start", onClick: this.startTimer },
				"Start"
			),
			React.createElement(
				"button",
				{ className: "btn pause", onClick: this.stopTimer },
				"Pause"
			),
			React.createElement(
				"button",
				{ className: "btn reset", onClick: this.resetTimer },
				"Reset"
			),
			React.createElement(
				"button",
				{ className: "btn break", onClick: this.breakTimer },
				"Break"
			),
			React.createElement(
				"p",
				{ className: "numbers" },
				this.state.time.m,
				" : ",
				this.state.time.s,
				" "
			),
			React.createElement(
				"div",
				{ className: "gem-wrapper" },
				React.createElement("div", { className: "gem gem-oval time" }),
				React.createElement("div", { className: "gem gem-square mind" }),
				React.createElement("div", { className: "gem gem-square reality" }),
				React.createElement("div", { className: "gem gem-oval power" })
			),
			React.createElement(
				"div",
				{ className: "gauntlet" },
				React.createElement("div", { className: "knuckle" }),
				React.createElement("div", { className: "knuckle" }),
				React.createElement("div", { className: "knuckle" }),
				React.createElement("div", { className: "knuckle" }),
				React.createElement("div", { className: "knuckle thumb" }),
				React.createElement(
					"div",
					{ className: "space-wrapper" },
					React.createElement("div", { className: "gem gem-oval space" })
				),
				React.createElement("div", { className: "arm" })
			)
		);
	}
}

ReactDOM.render(React.createElement(Timer, null), document.getElementById('app'));