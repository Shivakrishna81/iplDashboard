// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {cardDetails: [], isLoading: true}

  componentDidMount() {
    this.getCardDetails()
  }

  getCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamUrl: each.team_image_url,
    }))

    this.setState({cardDetails: updatedData, isLoading: false})
  }

  render() {
    const {cardDetails, isLoading} = this.state

    return isLoading ? (
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    ) : (
      <div className="homeContainer">
        <div className="IPL">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplImg"
          />
          <h1 className="iplHead">IPL Dashboard</h1>
        </div>
        <ul className="ul">
          {cardDetails.map(each => (
            <TeamCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
