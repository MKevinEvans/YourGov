function createMessage(htmlElement){

	let citizen = store.citizens[store.citizens.length-1]
	let repArray = $.grep(store.representatives, function(e){ return e.id === parseInt(htmlElement.dataset.id); });
	let sendClient = htmlElement.dataset.sendClient
	let rep = repArray[0]


	return new Message(citizen, rep, sendClient)
}


function email(htmlElement){
	message = createMessage(htmlElement)
	if (message.rep.email == "No email listed") {
		alert("Sorry! This representative doesn't have an email!")
	} else {
		let repEmail = message.rep.email
		window.location.href = `mailto:${repEmail}`
	}
}

function tweet(htmlElement){
	message = createMessage(htmlElement)
	if (message.rep.twitter == "No Twitter listed") {
		alert("Sorry! This representative doesn't have a Twitter!")
	} else {
		let base = 'https://twitter.com/intent/tweet?'
		let text = `${message.rep.twitter}`
		let hashtags = 'MyGov'
		let url = `${base}text=${text}&hashtags=${hashtags}`
		window.open(url)
	}
}
