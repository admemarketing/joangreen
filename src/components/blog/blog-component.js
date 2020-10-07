import React from 'react'
import {Link} from 'gatsby'



const BlogComponent = (props) =>{

	return(
		<>
	          <section className="grid-parent-blog">
				  
	            <span className="grid-child blog-num">
					{props.num}
				</span>

	            <div className="grid-child blog-body">

	            	<span className="published-on">Published On</span>

	                <span className="blog-date">
	                	{props.date}
	               	</span>

	                <h1>{props.title}</h1>
					
	                <div className="blog-link">
	                    <Link to={props.slugPost}>
	                        Read More
	                    </Link>
	                </div>
	            </div>
	        </section>
		</>
	)
}

export default BlogComponent