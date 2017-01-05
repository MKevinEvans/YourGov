const repRootURL = "https://www.googleapis.com/civicinfo/v2/representatives?address="

function representativesAdapter(){

  const address = $("#address").val()
  new Citizen(address)
  const repsURL = repRootURL + address + "&key=" + APIKey
  event.preventDefault()

  return $.ajax({
    method: "GET",
    url: repsURL
  }).done(parseRepresentatives)
}

function parseRepresentatives(response) {
  const repList = []
  response.offices.map(office => {
    office.officialIndices.map(index => {
      repList.push(createRepresentative(office, response.officials[index]))
    })
  })
  renderPage(fixOrder(repList))
}

function fixOrder(repList) {
  if (repList[0].title != "President of the United States") {
    repList.splice(3, 0, repList[0])
    repList.shift()
  }
    return repList
}
