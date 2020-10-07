import React from 'react'

 
const inputs = (props)=> {

 	const initName =  props.name;
 	const toCapitalize = initName.charAt(0).toUpperCase() + initName.slice(1);

	return (
		<label>
			<input 
				name={initName.toLowerCase()} 
				type={props.type}
				className="formInputs"
				placeholder={toCapitalize} 
				required 
			/>
		</label>
	)
}


export default inputs;