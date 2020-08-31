import React, {Component} from 'react'

class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      hora: new Date()
    })
  }

  render() {
    return (
      <div>{this.state.hora.toLocaleTimeString()}</div>
    );
  }

  componentDidMount() {
    this.id = setInterval(()=>this.cambioSegundo(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  cambioSegundo() {
    this.setState ({
      hora: new Date()
    })    
  }

}

export default Reloj;