import React from 'react'

const Card = (props) => {
  return (

    <div className="card mx-3" style={{ width: "18rem" }}>

      <img src={props.image} className="card-img-top" alt="Imagen de un perro." height="250px" />
      <div className="card-body text-center h-100">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.paragraph}</p>
        <a href="#" className="btn btn-primary mb-auto mt-3 ">Find Out Ore!</a>

      </div>
      
    </div>

  )
}

export default Card