
// eslint-disable-next-line react/prop-types
export default function InstaCode({url}) {
  return (
    <div className='insta-content-container'>
    <blockquote
    className="instagram-media"
    data-instgrm-permalink={url} >
  </blockquote>
  </div>
  )
}
