export function MoodBoardItem({color, image, description}){
  return(
    <div className="mood-board-item" style={{backgroundColor: color}}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard(){
  return(
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem color="#23b9de" image="https://tourismo-filipino.com/wp-content/uploads/2018/09/shutterstock_417404062-scaled-e1679208066711.jpg" description="Manila"/>
        <MoodBoardItem color="#23eb4b" image="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/15/GettyImages-510603856.jpg.rend.hgtvcom.1280.1280.suffix/1631722712772.jpeg" description="Jakarta"/>
        <MoodBoardItem color="#d9ac18" image="https://www.swedishnomad.com/wp-content/images/2016/05/Bangkok-reseguide.jpg" description="Bangkok"/>
      </div>
    </div>
  )
}