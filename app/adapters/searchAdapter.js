const searchRootURL = "https://www.googleapis.com/customsearch/v1?q="

function searchAdapter(repName){
  const formattedRepName = repName.split(" ").join("%20")
  new Search(repName)
  const searchURL = searchRootURL + formattedRepName + "&cx=" + SearchEngineId + "&num=5&key=" + SearchAPIKey

    return $.ajax({
    method: "GET",
    url: searchURL
  })
}

function parseSearchResults(results){
  // NOTE: infoObjects is an array of objects with keys for 'title' and 'link'
  let infoObjects = results.items.map(function(result){return Object.assign({}, {title: result.title, link: result.link})})
  return showLinks(infoObjects)
}

function showLinks(infoObjects){
  return (
    `<div class="col-lg-6 col-lg-offset-6  col-md-12 col-sm-12 col-xs-12 lightBox">
      <ul class="topSpaceS">
        ${infoObjects.map((object) =>{
          return ( `<li><a href="${object.link}" class="article" target="_blank">${object.title}</a></li>`)}
        ).join("")}
      </ul>
    </div>`
  )
}
