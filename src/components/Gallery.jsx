import Card from './ui/Card'

export default function Gallery() {
  return (
    <div className="gallery">
      <Card imgUri="/images/galaxy.webp" altTxt="an AI generated galaxy"/>
      <Card imgUri="/images/star-death.webp" altTxt="AI image of a dying star"/>
      <Card imgUri="/images/sun.webp" altTxt="AI image of the sun"/>
    </div>
  )
}
