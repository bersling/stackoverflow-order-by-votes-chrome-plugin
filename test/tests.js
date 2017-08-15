(function() {

  QUnit.test( "Tests", function( assert ) {

    assert.equal(document.getElementById('div1').lastElementChild.textContent, 'This is new.')

  });

})();
