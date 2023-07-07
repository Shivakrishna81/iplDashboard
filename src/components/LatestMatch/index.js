// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div>
        <h1>Latest Matches</h1>
        <div className="latestMatch">
          <div className="topContainer">
            <div>
              <h1 className="thead">{competingTeam}</h1>
              <h1 className="thead">{date}</h1>
              <p className="tpara">{venue}</p>
              <p className="tpara">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="topimg"
            />
          </div>

          <hr />

          <div className="btmContainer">
            <p className="tpara">First Innings</p>
            <p className="tpara">{firstInnings}</p>
            <p className="tpara">Second Innings</p>
            <p className="tpara">{secondInnings}</p>
            <p className="tpara">Man of the Match</p>
            <p className="tpara">{manOfTheMatch}</p>
            <p className="tpara">Umpires</p>
            <p className="tpara">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
