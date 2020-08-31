

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Practitioner: []
    }
  }

  componentDidMount() {
    fetch('http://hapi.fhir.org/baseR4/Practitioner')
      .then((response) => {
        return response.json()
      })
      .then((pract) => {
        this.setState({ Practitioner: pract.entry })
      })    
  }

  render() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Family name</th>
            <th>BirthDate</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.Practitioner.map(pract => {
            return (
              <tr key={pract.fullUrl}>
                <td>{pract.resource.id}</td>
                <td>{pract.resource.name ? pract.resource.name[0].family : ''}</td>
                <td>{pract.resource.birthDate}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
   
}

export default App;