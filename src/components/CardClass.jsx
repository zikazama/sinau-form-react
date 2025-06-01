import React from "react";

class CardClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            job: props.job,
            img: props.img,
            counter: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        alert('selamat jalan');
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div className="card">
                {/* <img src={this.props.img} alt="Avatar" /> */}
                {this.state.counter}
                <button onClick={this.increment}>Increment</button>
                <div className="container">
                    <h4><b>{this.state.name}</b></h4>
                    <p>{this.props.job}</p>
                </div>
            </div>
        )
    }
}

export default CardClass;