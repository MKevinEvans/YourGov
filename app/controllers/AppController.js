function run(){
  representativesAdapter()
  .done(function(){
    $('#results').hide().slideDown(2500)
  }).done(function(){
      $('.tweet').on('click', function(){
      tweet(this)
    })
      $('.email').on('click', function(){
      email(this)
    })
      $('.searchArticles').on('click', function(){
      let id = this.dataset.id
      Promise.resolve(searchAdapter(this.dataset.name)).then(function(result) {
        $(`#${id}`).append(parseSearchResults(result))
      })
      })
    })
  .fail(function() {
    alert("Please enter a valid U.S. address.")
  })
}

