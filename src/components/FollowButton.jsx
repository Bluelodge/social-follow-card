import { useState } from 'react'

export function FollowButton({ initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const followText = isFollowing ? 'FOLLOWING' : 'FOLLOW'
  const buttonClassName = isFollowing
    ? 'social-followCard-button is-following'
    : 'social-followCard-button'

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <button className={buttonClassName} onClick={handleFollow}>
      <span className="social-followCard-button-text"> {followText} </span>
      <span className="social-followCard-button-alter"> UNFOLLOW </span>
    </button>
  )
}
