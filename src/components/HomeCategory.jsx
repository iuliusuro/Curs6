import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function HomeCategory(props) {
   const {image, title, description, routeName} = props;
  return (
    <div className='col-6 mb-4'>
        <Link to={`/category/${routeName}`}>
          <h1>
              <img
                  className='w-100' 
                  src={image}
              />
              <h2>{title}</h2>
          </h1>
          <p>{description}</p>
        </Link>
    </div>
  )
}

export default HomeCategory