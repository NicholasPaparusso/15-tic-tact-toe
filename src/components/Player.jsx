import {useState} from 'react';

export default function Player({initialName, symbol, isActive,onChangeName}) {
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing( editing => !editing );
        
        if(isEditing){
            onChangeName(symbol,playerName)
        }
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    editablePlayerName  = isEditing ?  <input onChange={handleChange} type='text' required value={playerName}/> : editablePlayerName;


    return(
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-simbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{ isEditing ? 'Save' : 'edit' }</button>
      </li>
    );
}