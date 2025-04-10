import { useState } from "react";

const Player = ({initialName, symbol, isActive}) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
        const handleClick = () => {  
                setIsEditing((editing) => !editing)
        }

        const handleChange = (event) => {
                setPlayerName(event.target.value)
        }
    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? <input value={playerName} type="text" onChange={handleChange} required /> : <span className="player-name">{playerName}</span>}        
              <span className="player-symbol">{symbol}</span>
              <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span> 
        </li>
    );
}

export default Player;