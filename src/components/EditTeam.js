import React, { Component, Fragment } from "react";
import Config from "../config";
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const KEY_HUMAN_MAP = {
  player1: "Player Name",
  pos: "POS",
  age: "Age",
  fg: "FG",
  fga: "FGA",
  fg1: "FG%",
  _3p: "3P",
  _3pa: "3PA",
  _3p1: "3P%",
  _2p: "2P",
  _2pa: "2PA",
  _2p1: "2P%",
  eFg: "eFG",
  ft: "FT",
  fta: "FTA",
  ft1: "FT%",
  orb: "ORB",
  drb: "DRB",
  trb: "TRB",
  ast: "AST",
  stl: "STL",
  blk: "BLK",
  tov: "TOV",
  pf: "PF",
  pts: "PTS",
  per: "PER",
  ts: "TS",
  _3par: "3PAr",
  ftr: "FTr",
  orb1: "ORB%",
  drb1: "DRB%",
  trb1: "TRB%",
  ast1: "AST%",
  stl1: "STL%",
  blk1: "BLK%",
  tov1: "TOV%",
  usg: "USG",
  ows: "OWS",
  dws: "DWS",
  ws: "WS",
  ws48: "WS/48",
  obpm: "OBPM",
  dbpm: "DBPM",
  bpm: "BPM",
  vorp: "VORP"
};

class EditTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,

      searchQuery: "",
      data: [],
      displayPlayers: [],

      allocations: [],

      from: 0,

      saving: false
    };
  }

  handleCheckbox = async playerId => {
    let currentlyAllocated = this.state.allocations.includes(playerId);
    let newAllocations = currentlyAllocated
      ? // Remove the allocation if the player is currently allocated
        this.state.allocations.filter(p => p !== playerId)
      : // Add the allocation if the player is not currently allocated
        this.state.allocations.concat([playerId]);

    this.setState({ allocations: newAllocations, saving: true });

    let teamName = this.props.match.params.team;

    // Submit the allocations
    if (currentlyAllocated) {
      // Remove the allocation
      await fetch(`${Config.API}/Allocations/${teamName}/${playerId}`, {
        method: "DELETE"
      });
    } else {
      // Add the allocation
      await fetch(`${Config.API}/Allocations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          team: teamName,
          player: playerId
        })
      });
    }

    this.setState({ saving: false });
  };

  // componentWillMount() {
  //   fetch(`${Config.API}/Players`, { cache: "force-cache" })
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }

  componentWillMount() {
    this.getPlayers();
    this.getAllocations();
  }

  async getPlayers() {
    let response = await fetch(`${Config.API}/Players`, {
      cache: "force-cache"
    });
    let data = await response.json();
    this.setState({ data, displayPlayers: data, searchQuery: "" });
  }

  async getAllocations() {
    let teamName = this.props.match.params.team;
    if (!teamName) return;

    let response = await fetch(`${Config.API}/Allocations`);
    let data = await response.json();
    let allocations = data
      .filter(row => row.team === teamName)
      .map(row => row.player);

    this.setState({ allocations });
  }

  handleFilterPlayers = e => {
    this.setState({
      searchQuery: e.target.value,
      from: 0,
      displayPlayers: this.state.data.filter(player =>
        player.player1.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
  };

  handlePreviousPage = () => {
    // Set the new 'from' value to the max of 0 and the current from subtract 10
    // This is so if we're at the start of the list it wont go into the negatives
    this.setState({ from: Math.max(0, this.state.from - 8) });
  };

  handleNextPage = () => {
    // Only go to the next page if we can
    if (this.state.from + 8 < this.state.displayPlayers.length) {
      this.setState({
        from: this.state.from + 8
      });
    }
  };

  render() {
    if (this.state.data.length < 1)
      return (
        <div>
          {" "}
          <img src="/loading.jpg" />
        </div>
      );
    let playersPaginated = this.state.displayPlayers.slice(
      this.state.from,
      this.state.from + 10
    );
    return (
      <Fragment>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 200,
            height: 50,
            textAlign: "center",
            backgroundColor: "grey",
            // paddingTop: 10,
            boxSizing: "border-box",
            display: this.state.saving ? "block" : "none"
          }}
        >
          Saving...
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Search Players:
            <input
              type="text"
              value={this.state.searchQuery}
              onChange={this.handleFilterPlayers}
              //style={{ padding: 5 }}
            />
          </label>
        </form>
        <h1>Team: {this.props.match.params.team} </h1>
        <table
          style={{
            overflowX: "scroll",
            display: "block",
            maxHeight: "70%",
            maxWidth: "100%"
          }}
        >
          <thead>
            <tr>
              <th />
              {this.state.data.length > 0 &&
                Object.keys(this.state.data[0]).map(val => (
                  <th key={`th-${val}`}>
                    {KEY_HUMAN_MAP[val] ? KEY_HUMAN_MAP[val] : val}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody style={{ overflow: "auto", maxHeight: "100vh" }}>
            {playersPaginated.map(player => (
              <tr key={player.player1}>
                <Checkbox
                  onChange={e =>
                    this.handleCheckbox(player.player1, e.target.value)
                  }
                  checked={this.state.allocations.includes(player.player1)}
                />
                {Object.values(player).map((val, i) => (
                  <td key={`${player.player1}-${i}`}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <button width="" onClick={this.handlePreviousPage}>
            {"<"}
          </button>
          <button width="100" onClick={this.handleNextPage}>
            {">"}
          </button>
        </div>
        <Link to={`/ViewTeam/${this.props.match.params.team}`}>
          <button className="btnChangePage">View Team</button>
        </Link>
        <button className="btnSamePage">Edit Team</button>
      </Fragment>
    );
  }
}
export default EditTeam;
