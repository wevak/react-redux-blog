import React from 'react'
import { connect } from 'react-redux'
import images from '../assets/images'

const Profile = (props) => {
  const { user } = props
  return (
    <div className="position-absolute justify-content-center align-items-center" style={{ left: 190 }}>
      <div className="media p-3">
        <img className="img-fluid rounded mr-3" src={images.userProfileIcon} style={{ width: 240, height: 240 }} alt="Generic placeholder" />
        <div className="media-body">
          <h3 className="mt-0">{user.firstName + " " + user.lastName}</h3>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          <ul className="list-unstyled">
            <li>Name: {user.firstName + " " + user.lastName}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { session } = state
  return {
    user: session.users.find(user => user.id === session.currentlyLoggedIn.id)
  }
}

export default connect(mapStateToProps)(Profile)