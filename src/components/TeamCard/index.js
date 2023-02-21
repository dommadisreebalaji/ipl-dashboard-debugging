import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageURL} = teamData

  return (
    <li className="list">
      <Link to={`/team-matches/${id}`} className="team-card-container">
        <div className="team-card">
          <img src={teamImageURL} alt={name} className="team-card-image" />
          <p className="team-card-heading">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
