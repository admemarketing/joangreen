import React,{useRef, useState} from 'react'
import {Link} from 'gatsby';
import  Logo from '../../static/logo/main_logo.svg'

const Nav = (props) =>{

	const refSpan  = useRef();
	const [toggled, setToggled] = useState(false);

	const pages = [
		 'Home',
		 'About-the-Author',
		 'About-the-Book',
		 'Blog',
		 'Order',
		 'Contact'
	]

	let Listed = pages.map((e) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
		let filterUrl = (newUrl === 'home') ? '/' : `/${newUrl}`;

		return (
			<li>
				<Link 
					to={filterUrl}>
					{e.replace(/[-/]/g," ").trim()}
				</Link>	
			</li>
		)
	})

	const clickEvent = (e)=> {
		setToggled(!toggled);
	}
			
    return(		
        <>
			<nav className={`navigation ${props.blogNav ? 'blog-nav-prio' : ''}`}>
				<h1 className="heading-line"> 
					<span className="upper-span-heading">Joan Green</span>
					<span className="Big-heading">
						Resilience
					</span>
					<span className="lower-heading">
						Memoirs of Joan Green
					</span>
				</h1>
				
				<ul>
					<li>
						<Link to="/">
							Home
						</Link>
					</li>


					<li>
						<Link to="/about-the-book">
							Books
						</Link>
					</li>

					<li>
						<Link to="/about-the-author">
							Author
						</Link>
					</li>

					<li>
						<Link to="/order">
							Order
						</Link>
					</li>

					<li>
						<Link to="/gallery">
							Gallery
						</Link>
					</li>

					<li>
						<Link to="/blog">
							Blog
						</Link>
					</li>

					<li>
						<Link to="/contact">
							Contact
						</Link>
					</li>

				</ul>
			</nav>


			<nav className="burger-nav">
				<h1>
					<Link 
						style={props.pathExt === '/'
						 	|| props.pathExt === '' ? {
							color: 'rgb(255, 202, 0)'
						}:{
							color: '#000'
						}}
						to="/">
						
						<span className="logo-name">
							DR. PETER L. JOHNSTON
						</span>

					</Link>
				</h1>
				<h1></h1>
				<ul
					className="hamburger-ul"
					onClick={e => clickEvent(e)}
					ref={refSpan}>

					<span className="hamburger-span"></span>
					<span className="hamburger-span"></span>

				</ul>

				<section className={toggled ? 'active-nav': 'non-active-nav'}>
					<span className="close-mark" onClick={e => clickEvent(e)}>
						<span className="hamburger-x-mark"></span>
						<span className="hamburger-x-mark"></span>
					</span>

					<ul>
						<p class="list-label">
							Navigations.
						</p>
						{ Listed }
					</ul>
				</section>
			</nav>
        </>			
    )
}

export default Nav;