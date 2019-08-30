import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div class="col-md-6">
      <div className="card profile-card-3">
        <div class="background-block">
          <img src={avatar} className="pro-img" />
        </div>
        <div class="profile-thumb-block" />
        <div className="card-content">
          <p className="my-1">
            {' '}
            <h2>{name}</h2>
            <p>
              {status} {company && <span> at {company}</span>}
            </p>
            {location && <span>{location}</span>}
          </p>{' '}
          <div className="card-button">
            {' '}
            <Link to={`/profile/${_id}`} className="btn btn-primary">
              View Profile
            </Link>
          </div>
          {skills.slice(0, 4).map((skill, index) => (
            <div key={index} className="text-primary">
              <i className="fas fa-check" /> {skill}
            </div>
          ))}{' '}
        </div>
      </div>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem
