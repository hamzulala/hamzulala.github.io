
import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import Config from '../config';

class Home extends Component {
    state = {
        teams: [],
        currentTeam: '',
        saving: false
    }

    onSubmit = (e) => {
        e.preventDefault();
        var teamname = '';
        console.log(teamname);
        if (this.state.teams.includes(this.state.currentTeam)){
            console.log("Going to View Team");
        }
        else {
            console.log("Create Team");
        }

    }

    handleInput = (e) => {
        this.setState({currentTeam: e.target.value});
    }

    componentWillMount() {
        // Called when component is loading
        fetch(`${Config.API}/Teams`).then((res) => res.json()).then((json) => {
            this.setState({teams: json.map((obj) => obj.fullTeamName)});
        });
    }

    async createTeam(teamName) {
        this.setState({saving: true});
        await fetch(`${Config.API}/Teams`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              fullTeamName: teamName
            })
        });

        this.props.history.push(`/EditTeam/${this.state.currentTeam}`);
    }

    render(){
        let teamExists = this.state.teams.includes(this.state.currentTeam);
        return(
        <div name = "HomeView">
            {
                this.state.saving ? (
                    <img src="/loading.jpg"></img>
                ) : null
            }
            <form className="HVTeamName">
                <h1>Home View</h1>
                <input className= "TeamName" type = "text" name= "Name" value={this.state.currentTeam} onChange={this.handleInput}></input>
            </form>
            <br>
            </br>
            <div className= "linkButton">
                <button 
                    onClick={() => { if(teamExists) {
                        this.props.history.push(`/ViewTeam/${this.state.currentTeam}`);
                    } else {
                        this.createTeam(this.state.currentTeam);
                    }}}
                    className="btn">
                    {teamExists ? 'View Team' : 'Create Team'}
                </button>
            </div>
        </div>
        )
    }
}

export default Home;