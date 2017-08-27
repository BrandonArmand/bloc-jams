var buildCollectionItemTemplate = function(){
    var template =
      '  <div class="collection-album-container column fourth">'
    + '    <img src="assets/images/album_covers/01.jpg"/>'
    + '    <div class="collection-album-info caption">'
    + '      <p>'
    + '        <a class="album-name" href="album.html"> Rios\'s Sick Ass Party </a>'
    + '        <br/>'
    + '        <a href="album.html"> Sick AF </a>'
    + '        <br/>'
    + '        1 song(s)'
    + '        <br/>'
    + '      </p>'
    + '  </div>';
    return $(template);
  };


$(window).load(function(){
  var $collectionContainer = $('.album-covers');
  $collectionContainer.empty();
  for(var i = 0; i < 1; i++){
    var $newThumbnail = buildCollectionItemTemplate();
    $collectionContainer.append($newThumbnail);
  }
});
