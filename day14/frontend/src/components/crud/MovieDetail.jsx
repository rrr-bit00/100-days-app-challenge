export default function MovieDetail({movie}) {
    if (!movie) {
      return <p>作品が削除されたか、詳細がありません</p>
    }
    console.log(movie);
  return (
    <div>
      <h2>{movie.title}</h2>
      <img className="" src={movie.image} alt={movie.title} />
      <p>監督：{movie.director}</p>
      <p>公開年：{movie.released_year}</p>
      <p>概要：{movie.description}</p>
    </div>
  )
}
