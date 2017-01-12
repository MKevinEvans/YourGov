function renderPage(repList) {

  $('#phone-disclaimer').empty().append(`<h5>Call your representative, it's more effective</h5>`)

  $('#results').empty().append(repList.map(rep => {

    if (rep.twitter === "No Twitter listed"){
      var twitterLink = `${rep.twitter}`
    } else {
      var twitterLink = `<a href="https://twitter.com/${rep.twitter}" target="_blank" class="twitter">${rep.twitter}</a>`
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
         <p><b>Email:</b> ${rep.email.join("")}</p>
         <p><b>Twitter:</b> ${twitterLink}</p>
      </div>


      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-right">
        <form class='email' action="#" data-id="${rep.id}"data-sendClient="email">

          <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-bullhorn", aria-hidden="true"></span> Email ${rep.name}!</button>
        </form>

        <form class='tweet' action="#" data-id="${rep.id}" data-sendClient="tweet">

          <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-bullhorn", aria-hidden="true"></span> Tweet ${rep.name}!</button>

        </form>

        <form class='searchArticles' action="#" data-id="${rep.id}" data-name="${rep.name}">

          <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-book", aria-hidden="true"></span> See News on ${rep.name}</button>

        </form>
      </div>
    </div>`
  }).join(" "))
}
