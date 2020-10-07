import React from 'react'


const OnePage = (props)=>{
    return(
        <>
          <section className="one-page-section">
              {
                props.children
              }
          </section>
        </> 
    )
}

export default OnePage;