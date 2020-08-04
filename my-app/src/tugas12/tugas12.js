import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      date: new Date()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date()
    });
  }


  render(){
    return(
      <>
      {this.state.time>=0 &&
        <div id="textbox">
        <h1 style={{float: "left", width:"50%",textAlign:"center"}}>
        {"sekarang jam : "+this.state.date.toLocaleTimeString()}</h1>
        
        <h1 style={{float: "left", width:"50%",textAlign:"center"}}>
        {"hitung mundur: "+this.state.time}</h1>
        </div>
      }
      </>
    )
  }
}

export default Timer;