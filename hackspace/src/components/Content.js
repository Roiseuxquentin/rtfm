import React from 'react'


// THX https://hackernoon.com///////////////////////
const copyToClipboard = str => {                  //
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value = str;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';                 //
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =                                //
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }												  //
}												  //
// THX https://hackernoon.com///////////////////////

  
const recursive = (parents) => {
  
	// console.log('%c DebuGg : ', 'background: black; color: red' , parents )
	if (parents.type == "categorie" ) {

			return parents.children.map(child => {
				if ( child.children.length && ( child.type == "categorie" ) ) {
					return <div><h1 className="categorie" >{child.title}</h1>{recursive(child.children)}</div>
				} else {
					return <div><h5>{child.title}</h5>{recursive(child.children)}</div>
				}
			 })
	}  else {
			return parents.map(element => {
								if (element.type == "categorie") {
									return ( 
										<h2>
											{element.title} <br/>  {recursive(element.children)}
										</h2>	) 
								} else {
									return(
										 <figure>
										  <figcaption className="codeTitle" >{element.title}</figcaption>
										  <p className="codeDescription" >{element.description}</p>
										  <pre>
										    <code className="pointer" onClick={()=> copyToClipboard(element.code)} >
										    	{element.code}
										    </code>
										  </pre>
										</figure> )
								}
							})
		
	}
}
const Content = ({ data }) => {

	return (<div >
			 {recursive(data)}
		    </div>)

}

export default Content