import React from 'react'

// ################################################### 
// #*/=============================================\*# 
// # ||                      .__                  || #
// # ||   ____   ____   ____ |  |   ____   ____   || #
// # || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
// # || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
// # ||  \___  >\___  >___  /|____/\____/ \____/  || #
// # ||      \/     \/_____/                  2020|| #
// #.\=============================================/.#
// ###################################################

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
  												  //
  }												  //
}												  //
// THX https://hackernoon.com///////////////////////


	const handleClick = (e,elt) => {
		e.preventDefault();
		const url = e.target.href 
		window.open(url,'_blank');
	}


	const Breek = ({element}) => {

		return ( <figure id={element.key} key={element.key} >
			<figcaption className="codeTitle purple" >{element.title}</figcaption>
			<p className="codeDescription italic" >{element.description}</p>

			{element.content.map((elt,index) => {
				// subStr pour pour delete l identificateur [cod],[cmt]...
				if (elt.includes('[cod]')) {
					return (<pre key={index + Math.random()} style={{marginTop : "6px"}} >
						<code className="finger code" onClick={(event)=> copyToClipboard(elt.substr(5)) } >
						{elt.substr(5)}
						</code>
						</pre>)
				} else if (elt.includes('[lnk]')) {
					return (<a key={index + Math.random()}
								className="finger link"
								style={{display : "flex",marginLeft : "15vw"}}
							    href={elt.substr(5)}
							    onClick={(event,elt)=> handleClick(event)} >
						{elt.substr(5)}
						</a>)
				} else if (elt.includes('[cmt]')) {
					return <p key={index + Math.random()} className="codeStep" >{elt.substr(5)}</p>
				} else if (elt.includes('[img]')) {
		            return <img source={elt.substr(5)} />
				} else if (elt.includes('[ssc]')) {
		            return <p key={index + Math.random()} className="secondStep">{elt.substr(5)} </p>
				} else {
		  			return <div />
				}
			}) }

			</figure> )
	}

	export default Breek