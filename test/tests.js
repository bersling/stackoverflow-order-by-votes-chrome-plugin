(function() {

  QUnit.test( "Tests", function( assert ) {

    assert.equal(document.getElementById('answers').childNodes[0].innerHTML.trim(), 'A <span class="vote-count-post">55</span>.');

  });

})();
