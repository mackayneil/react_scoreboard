import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import HighscoreIcon from './HighscoreIcon'

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,       
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number
    }


    render() {
        const {
            name,
            removePlayer,
            id,
            score,
            index,
            changeScore,
            highscore            
        } = this.props;
       
        return (
          <div className="player">             
            <span className="player-name">           
              <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
              <HighscoreIcon                   
                score = {score}   
                highscore = {highscore}                     
              />
              { name }             
            </span>
      
            <Counter 
                score = {score}
                index = {index}
                changeScore = {changeScore}                    
                />
          </div>
        );
    }
  }

  export default Player