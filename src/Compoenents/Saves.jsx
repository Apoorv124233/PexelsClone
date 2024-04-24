import React from 'react'
import Loader from './Loader'
const Saves = ({saved,loader}) => {
  return (
    <>
       <div className="container-fluid text-center" id="top">
        {loader ? (
          <Loader /> // Corrected component name
        ) : (
          <>
            <div className="flex"> {/* Fixed div tag */}
              {saved.map((image) => (
                <div key={image.id} className="item" >
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {saved.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
        )}
      </div>
    </>
  )
}

export default Saves
