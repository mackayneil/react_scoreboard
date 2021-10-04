import React from "react";

const AddPlayerForm = ({ addPlayer }) => {

    let playerInput = React.createRef();

    let handleSubmit = (e) => {
        e.preventDefault()
        addPlayer(playerInput.current.value);  
        e.currentTarget.reset()
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                ref={playerInput}                    
                placeholder="Enter player name"
            />

            <input 
                type="submit"
                value="Add player"
            />
        </form>
    );
}


export default AddPlayerForm