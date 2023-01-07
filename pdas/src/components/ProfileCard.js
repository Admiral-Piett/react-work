function ProfileCard({ title, username, image, description }) {
  // This is the same as the arg not actually sending in the `props` var.
  // const {title, username} = props;

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="pda logo" />
          </figure>
        </div>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p class="title is-4">{title}</p>
            <p class="subtitle is-6">{username}</p>
          </div>
        </div>
        <div class="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
