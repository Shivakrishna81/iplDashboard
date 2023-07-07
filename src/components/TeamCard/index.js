// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, teamUrl, id} = details

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <div className="card">
          <img src={teamUrl} alt={name} className="card-img" />
          <p className="teamName">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
