import React, { PropsWithChildren } from 'react';


type TCard = PropsWithChildren &{
  title: string,
  text: string,
  href: string,
  btnTitle: string,
  width: string,
}

const Card = (props: TCard) => {
  const images = React.Children
    .map(props.children, child  => <div className='image'>{child}</div>)

  return (
    <div className="card" style={{width: props.width}}>
      {images}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.href} className="btn btn-primary">{props.btnTitle}</a>
      </div>
    </div>
  )
}

export default Card
