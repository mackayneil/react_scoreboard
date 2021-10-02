import React, { Component } from 'react';
import Header from './Header';
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'
  


class App extends Component {
  state = {
    players: [
      {
        name: "Neil",
        score: 0,
        id: 1
      },
      {
        name: "Tiffany",
        score: 0,
        id: 2
      },
      {
        name: "Ilona",
        score: 0,
        id: 3
      },
      {
        name: "Devon",
        score: 0,
        id: 4
      }
    ]
  };

  
  //Player id counter
  prevPlayerID = 4;

  handleChangeScore = (index, numChange) => {
     this.setState( prevState => ({
        score: prevState.players[index].score += numChange
    })); 
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
            {
              name,
              score: 0,
              id: this.prevPlayerID += 1
            }
        ]
      }
    })
  }
  
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className = "scoreboard">
        <Header 
          title = "Scoreboard" 
          players = {this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name = {player.name}
            score = {player.score}
            id = {player.id}
            index = {index}
            key = {player.id.toString()} 
            changeScore = {this.handleChangeScore}
            removePlayer = {this.handleRemovePlayer}           
          />
        )}

        <AddPlayerForm 
          addPlayer = {this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
