export function UserPreview({ username, name, avatar, description }) {
  const formattedUsername = `@${username}`

  return (
    <>
      <header className="social-followCard-header">
        <img
          className="social-followCard-avatar"
          src={avatar}
          alt={`Avatar del usuario ${name}`}
        />
      </header>
      <main className="social-followCard-info">
        <h3>{name}</h3>
        <p>{formattedUsername}</p>
        <span>{description}</span>
      </main>
    </>
  )
}
