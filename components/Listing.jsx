const Listing = ({title, url}) => {
  return (
    <>
      <p>
        <a href={`${url}`} target="_blank">{title}</a>
      </p>
    </>
  )
}

export default Listing