const searchRootURL = "https://www.googleapis.com/customsearch/v1?q="

function searchAdapter(repName){
	debugger
  const formattedRepName = repName.split(" ").join("%20")
  new Search(repName)
  const searchURL = searchRootURL + formattedRepName + "&cx=" + process.env.SearchEngineId + "&num=5&key=" + process.env.SearchAPIKey
  event.preventDefault()

  return $.ajax({
    method: "GET",
    url: searchURL
  }).done(parseSearchResults)
}


function parseSearchResults(results){
	debugger
	console.log(results)
}


// CODE FROM OTHER PROJECT (IN RUBY) USED FOR REFERENCE
// function findArticles(repName){
// formattedRepName = repName.split(" ").join("%20")
// results = JSON.parse(open("https://www.googleapis.com/customsearch/v1?q=${formattedRepName}&cx=007603552491376187772:wtvb0spcwcu&num=5&key=${SearchAPIKey}").read)
// }