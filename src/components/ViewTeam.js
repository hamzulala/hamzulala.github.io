
import React, {Component} from 'react'
import Config from '../config';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const KEY_HUMAN_MAP = {
    'player1': 'Player Name',
    'pos' : 'POS',
    'age' : 'Age',
    'fg' : 'FG',
    'fga' : 'FGA',
    'fg1' : 'FG%',
    '_3p' : '3P',
    '_3pa' : '3PA',
    '_3p1' : '3P%',
    '_2p' : '2P',
    '_2pa' : '2PA', 
    '_2p1' : '2P%',
    'eFg' : 'eFG',
    'ft' : 'FT',
    'fta' : 'FTA',
    'ft1' : 'FT%',
    'orb' : 'ORB',
    'drb' : 'DRB',
    'trb' : 'TRB',
    'ast' : 'AST',
    'stl' : 'STL',
    'blk' : 'BLK',
    'tov' : 'TOV',
    'pf' : 'PF',
    'pts' : 'PTS',
    'per' : 'PER',
    'ts' : 'TS',
    '_3par'  :'3PAr',
    'ftr' : 'FTr',
    'orb1' : 'ORB%',
    'drb1' : 'DRB%',
    'trb1' : 'TRB%',
    'ast1' : 'AST%',
    'stl1' : 'STL%',
    'blk1' : 'BLK%',
    'tov1' : 'TOV%',
    'usg' : 'USG',
    'ows' : 'OWS',
    'dws' : 'DWS',
    'ws' : 'WS',
    'ws48' : 'WS/48',
    'obpm' : 'OBPM',
    'dbpm' : 'DBPM',
    'bpm' : 'BPM',
    'vorp' : 'VORP'
}

class ViewTeam extends Component {
    state = {
        allocations: [],
        players: []
    }

    componentDidMount() {
        fetch(`${Config.API}/Allocations`).then(res => res.json()).then(data => {
            this.setState({allocations: data});
        });

        fetch(`${Config.API}/Players`).then(res => res.json()).then(data => {
            for(let player of data) delete player.allocation;
            this.setState({players: data});
        });
    }

    render(){
        let teamName = this.props.match.params.team;
        let teamAllocations = this.state.allocations.filter(alloc => alloc.team === teamName);
        let teamPlayerNames = teamAllocations.map(alloc => alloc.player);
        let teamPlayers = this.state.players.filter(player => teamPlayerNames.includes(player.player1));

        if(this.state.players.length < 1) return(<div>Loading...</div>)

        return(
            <div>
            <h1>{teamName}</h1>
            <p> {teamPlayerNames.length} /15 players selected </p>
            <table className = "ViewTable">
                <thead>
                    <tr>
                        {Object.keys(teamPlayers[0] || {}).map(col => <th>{
                            KEY_HUMAN_MAP[col] ? KEY_HUMAN_MAP[col] : col
                        }</th>)}
                    </tr>
                </thead>
                <tbody>
                {teamPlayers.map(row => {
                    return (
                    <tr key={row.id}>

                        {Object.values(row).map(val => <td>{val}</td>)}
                        <button> - </button>
                    </tr>
                    );
                })}
                </tbody>
            </table> 
            <button className="btnSamePage">View Team</button>   
            <Link to={`/EditTeam/${teamName}`}>
                <button className="btnChangePage">
                    Edit Team
                 </button>
            </Link>
            </div>        
        )
    }
}

export default ViewTeam;
