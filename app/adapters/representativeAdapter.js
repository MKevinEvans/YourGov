const repRootURL = "https://www.googleapis.com/civicinfo/v2/representatives?address="

function representativesAdapter(){

  const address = $("#address").val().split(" ").join("+")
  new Citizen(address)
  const repsURL = repRootURL + address + "&key=" + ENV['APIKey']
  event.preventDefault()

  return $.ajax({
    method: "GET",
    url: repsURL
  }).done(parseRepresentatives)
}

function parseRepresentatives(response) {
  const repList = []

  response.offices.map(office => {
    const index = office.officialIndices
    if (index.length > 1) {
      index.map(i => {
        repList.push(createRepresentative(office, response.officials[i]))
      })
    } else {
      repList.push(createRepresentative(office, response.officials[index]))
    }
  })
  renderPage(repList)
}