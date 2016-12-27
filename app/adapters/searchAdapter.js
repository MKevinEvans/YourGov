const searchRootURL = "https://www.googleapis.com/customsearch/v1?q="

function searchAdapter(repName){
  const formattedRepName = repName.split(" ").join("%20")
  new Search(repName)
  const searchURL = searchRootURL + formattedRepName + "&cx=" + SearchEngineId + "&num=5&key=" + SearchAPIKey
    
    return $.ajax({
    method: "GET",
    url: searchURL
  }).done(parseSearchResults)
}



function parseSearchResults(results){   
  // NOTE: infoObjects is an array of objects with keys for 'title' and 'link'
  let infoObjects = results.items.map(function(result){return Object.assign({}, {title: result.title, link: result.link})})
  return showLinks(infoObjects)
}



function showLinks(infoObjects){
  
  let display = (`<div>
            <ul>
  ${infoObjects.map((object) =>{
    return ( `<li><a href="${object.link}">${object.title}</a></li>`)}
            )}
          </ul>
          </div>`
)
  
  return display
}