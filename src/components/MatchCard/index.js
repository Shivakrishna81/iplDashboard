import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {competingTeam, competingTeamLogo, result, matchStatus} = matchData

    return (
      <li className="matchItem">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="matchimg"
        />
        <h1 className="team">{competingTeam}</h1>
        <p className="team2">{result}</p>
        <p className="team2">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
