

class Timer extends React.Component {

	constructor() {
		super();
		this.state = { time: {}, seconds: 90 };
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}

	secondsToTime(secs) {
		let hours = Math.floor(secs / (60 * 60));

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
			"h": hours,
			"m": minutes,
			"s": seconds
		};
		return obj;
	}

	componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
	}

	startTimer() {
		if (this.timer == 0) {
			this.timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = this.state.seconds - 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds
		});

		let timeElapsed = minutes + ":" + seconds;

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

		// Check if we're at zero.
		if (seconds == 0) {
			clearInterval(this.timer);
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
				{ onClick: this.startTimer },
				"Start"
			),
			React.createElement(
				"h2",
				null,
				this.state.time.m,
				" : ",
				this.state.time.s,
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

ReactDOM.render(React.createElement(Timer, null), document.getElementById('app'));