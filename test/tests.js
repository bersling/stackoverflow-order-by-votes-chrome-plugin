(function() {

  QUnit.test( "Tests", function( assert ) {
    assert.equal(document.getElementsByClassName('answer').item(0).innerHTML.trim(), 'A <span class="vote-count-post">55</span>.');
  });

})();
