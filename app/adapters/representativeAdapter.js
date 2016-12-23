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
  renderPage(repList)
}
