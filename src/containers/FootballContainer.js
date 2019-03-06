import React, { Component } from 'react';
import TeamSelector from '../components/TeamSelector.js';
import TeamDetail from '../components/TeamDetail.js';
import APIKey from '../APIKey';

class FootballContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            teams: [],
      currentTeam: null
         }
         this.handleTeamSelected = this.handleTeamSelected.bind(this);

    }

    componentDidMount(){
        const url = "http://api.football-data.org/v2/competitions/PL/teams";
        fetch(url, {
            headers: {'X-Auth-Token': APIKey}
            })
            .then(response => response.json())
            .then(data => {
                this.setState({teams: data.teams})
                console.log(this.state.teams);
            })
            .catch(err => console.error(err));
    }

    handleTeamSelected(id){
        const selectedTeam = this.state.teams[id];
        this.setState({currentTeam: selectedTeam})
        const url = `http://api.football-data.org/v2/teams/${id}`;
    
        fetch(url, {
            headers: {'X-Auth-Token':APIKey}
            })
            .then(response => response.json())
            .then(data => {
                this.setState({currentTeam: data})
                console.log(data);
        })
            .catch(err => console.error(err));
    }

        render() { 
            return ( 
                <section>
                    <h1>Premier League</h1>
                    <TeamSelector teams={this.state.teams} onTeamSelected={this.handleTeamSelected}/>
                    <TeamDetail team={this.state.currentTeam}/>
                </section>
            );
        }
}
 
export default FootballContainer;