function renderPage(repList) {

  $('#phone-disclaimer').empty().append(`<h5>Call your representative, it's more effective</h5>`)

  $('#results').empty().append(repList.map(rep => {

    if (rep.twitter === "No Twitter listed"){
      var twitterButton = `<p><b>${rep.twitter}</b></p>`
    } else {
      var twitterButton = `<p><button class="tweet btn btn-default" data-id="${rep.id}" data-sendClient="tweet"><span class="glyphicon glyphicon-bullhorn", aria-hidden="true"></span> Tweet:</button> <a href="https://twitter.com/${rep.twitter}" target="_blank" class="twitter">${rep.twitter}</a></p>`
    }
    if (rep.email[0] === "No email listed"){
      var emailButton = `<p><b>${rep.email}</b></p>`
    } else {
      var emailButton = `<p><button class="email btn btn-default" data-id="${rep.id}" data-sendClient="email"><span class="glyphicon glyphicon-bullhorn", aria-hidden="true"></span> Email:</button> ${rep.email.join("")}</p>`
    }

    return `<div id=${rep.id} class="row rowFormat darkBox text-center">
      <div class="col-lg-2 col-lg-push-0 col-md-4 col-md-push-4 col-sm-4 col-sm-push-4 col-xs-6">
        <img src=${rep.photo} class="img-responsive img-circle">
      </div>

      <div class="col-lg-4 col-lg-pull-0 col-md-4 col-md-pull-4 col-sm-4 col-sm-pull-4 col-xs-6">
        <h4>${rep.title}</h4>
        <h3>${rep.name}</h3>
        <p>${rep.party}</p>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 topSpaceM">
         <p><b>Call:</b> ${rep.phone.join("")}<p>
         ${emailButton}
         ${twitterButton}
      </div>


      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-right">

        <button class='searchArticles btn btn-default' action="#" data-id="${rep.id}" data-name="${rep.name}"><span class="glyphicon glyphicon-book", aria-hidden="true"></span> See News on ${rep.name}</button>
      </div>
    </div>`
  }).join(" "))
}
