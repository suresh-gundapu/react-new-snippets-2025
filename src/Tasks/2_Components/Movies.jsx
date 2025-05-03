let Movies = (props) => {
const {title,thumbnailUrl,url} = props;
  return (

    <>
      <article className="post-card">
        <img src={thumbnailUrl} alt="something" />
        <h2 className="title"> {title}</h2>
        <a href={url} className="button">Details</a>
      </article>
    </>
  )
}
export default Movies;