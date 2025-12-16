const Card = ({ para, imgsrc }) => {
  return (
    <div className="card">
      <p>{para}</p>
      <img src={imgsrc} alt="" />
    </div>
  )
}

export default Card;