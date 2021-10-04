import React from "react";
import PropTypes from 'prop-types';

const Stats = ({ players }) => {

let totalPlayers = players.length;
let totalPoints = players.reduce(function(total, player) {
    return total + player.score
}, 0)


    return(
        <table className="stats">
        <tbody>
            <tr>
                <td>Players:</td>
                <td>{ totalPlayers }</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
            </tr>
        </tbody>
        </table>
    );
}

Stats.prototype = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
}

export default Stats