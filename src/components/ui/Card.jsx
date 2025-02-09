import Citation from "../Citation";

export default function Card({imgUri, altTxt, citation}) {
  return (
    <div className="card">
      <img src={imgUri} alt={altTxt} />

      <Citation />
    </div>
  )
}
