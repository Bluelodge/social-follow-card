import { UserPreview } from './UserPreview'
import { FollowButton } from './FollowButton'
import { users } from '../mocks/user.json'

import '../FollowCard.css'

export function FollowCard () {

  return (
    users.map(({ username, name, avatar, isFollowing, description })=> (
      <article 
        key={username}
        className="social-followCard"
      >
        <UserPreview
          username={username}
          name={name}
          avatar={avatar}
          description={description}
        />
        <FollowButton
          initialIsFollowing={isFollowing}
        />
      </article>
    ))
  )
}
