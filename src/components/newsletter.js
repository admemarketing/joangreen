import React from 'react'


const Newsletter = ()=>{


    const onSubmitForm = (e)=>{

    }

    return (
        <>
            <section className="newsletter-section">
                <div className="container-gt">                    
                    <form 
                        onSubmit={(e)=>onSubmitForm(e)}
                        method="POST"
                        >

                        <div className="form-newsletter-wrapper">
                            <input name="email" type="email" placeholder="Enter email" />
                            
                            <button>
                                <input type="submit" name="submit" />
                            </button>
                        </div>
                        
                    </form>
                </div>
            </section>
        </>
    )
}

export default Newsletter