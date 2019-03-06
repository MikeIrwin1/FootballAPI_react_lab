import React from 'react';

const TeamDetail = ({ team }) =>{
    if (!team) return null;
    const playersNames = team.squad.map(player =>{
        return (
            <li key= {player.id}>{player.position} {player.name} - {player.shirtNumber}</li>
        )
    })
    console.log(team.squad)
    return(  
        <fragment>
            <h2>Name</h2>
            <p><img src={team.crestUrl} alt={team.name}/>{team.name}</p>
            <h2>Squad</h2>
            <ul>
                {playersNames}
            </ul>
        </fragment>
    );
    
}
 
export default TeamDetail;