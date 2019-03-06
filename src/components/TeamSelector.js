import React from 'react';

const TeamSelector = (props) => {
    const options = props.teams.map((team, id )=> {
        return <option value = {team.id} key = {team.id}>{team.name}</option>
    })

    function handleChange(e){
        props.onTeamSelected(e.target.value);
    }

    return (
    <select id = "team-selector" onChange = {handleChange} defaultValue = "Default">
        <option  value="selected">Choose a team</option>
        {options}
    </select>
    )
}
 
export default TeamSelector;