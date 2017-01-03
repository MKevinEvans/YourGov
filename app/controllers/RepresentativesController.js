function renderPage(repList) {

  $('#phone-disclaimer').empty().append(`<h4>The best way to cut through the noise is to call your representative.</h4>`)

  $('#results').empty().append(repList.map(rep => {

    if (rep.twitter === "No Twitter listed"){
      var twitterLink = `<p>${rep.twitter}</p>`
    } else {
      var twitterLink = `<p><a href="https://twitter.com/${rep.twitter}" target="_blank" class="twitter">${rep.twitter}</a></p>`
    }

    return `<div id=${rep.id} class="row rowFormat darkBox">
      <div class="col-lg-2 col-md-6 col-sm-6">
        <img src=${rep.photo} class="img-responsive img-circle">
      </div>

      <div class="col-lg-2 col-md-6 col-sm-6">
        <h4>${rep.title}</h4>
        <h3>${rep.name}</h3>
        <p>${rep.party}</p>
      </div>

      <div class="col-lg-2 rightSpaceM">
         <h4>Phone:<h4>
         <p>${rep.phone.join("<br>")}</p>
      </div>

      <div class="col-lg-2">
         <h4>Emails:</h4>
        <p>${rep.email.join("<br>")}</p>
      </div>

      <div class="col-lg-1">
        <h4>Twitter:</h4>
        ${twitterLink}
      </div>

      <div id ="${rep.id}" class="col-lg-2 leftSpaceL text-right">
        <form class='email' action="#" data-id="${rep.id}"data-sendClient="email">

          <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-bullhorn", aria-hidden="true"></span> Email ${rep.name}!</button>
        </form>

        <form class='tweet' action="#" data-id="${rep.id}" data-sendClient="tweet">

          <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-bullhorn", aria-hidden="true"></span> Tweet ${rep.name}!</button>

        </form>

        <form class='searchArticles' action="#" data-id="${rep.id}" data-name="${rep.name}">

          <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-book", aria-hidden="true"></span>See News about ${rep.name}</button>

        </form>
      </div>
    </div>`
  }).join(" "))
}
