function run(){
  representativesAdapter()
  .done(function(){
    $('#results').hide().slideDown(2500)
  }).done(function(){
      $('.tweet').on('submit', function(){
      event.preventDefault()
      tweet(this)
    })
      $('.email').on('submit', function(){
      event.preventDefault()
      email(this)
    })
      $('.searchArticles').on('submit', function(){
      event.preventDefault()
      var id = this.dataset.id
      Promise.resolve(searchAdapter(this.dataset.name)).then(function(result) {
        $(`#${id}`).append(parseSearchResults(result))
      })
      })
    })
  .fail(function() {
    alert("Please enter a valid U.S. address.")
  })
}
