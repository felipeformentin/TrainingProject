import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import './App.css';
import NavbarX from './components/navbar';
import FoodCard from './components/foodCard';
import $ from 'jquery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: Array(9).fill("null"),
    };
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/",
      success: function(result){
        this.setState({value: result});
        console.log(this.state.value[0].name);
      }.bind(this),
      error: function(xhr, textStatus, errorThrown){
        console.log("aw");
      }
    });
  }

  render() {

    var cols = [];
    for (var i = 0; i < 4; i++) {
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        cols.push(<Col key={i}><FoodCard name={this.state.value[i].name}
                                         description={this.state.value[i].description}
                                         key={i.id}/></Col>);
    }

    return (
      <div className="App">
          <NavbarX/>
          <Jumbotron>
            <h1> Confira nossas maravilhosas opções ! </h1>
            <Jumbotron>
              <Container>
                <Row>
                  {cols}
                </Row>
              </Container>
            </Jumbotron>
          </Jumbotron>
      </div>
    );
  }
}

export default App;