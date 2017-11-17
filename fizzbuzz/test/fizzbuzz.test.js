var test = require('tape');
var fizzbuzz = require('../fizzbuzz.js');


test("Fizzbuzz output", function(t) {

  var actual = fizzbuzz(3);
  var expected = 'fizz';
  t.equal(actual,expected,'fizzbuzz(3) should return fizz');
  t.end();
});

test("fizzbuzz output", function(t){
  var actual = fizzbuzz(5);
  var expected = 'buzz';
  t.equal(actual, expected, 'fixbuzz(5) should return buzz')
t.end();
});

test("fizzbuzz output", function(t){
  var actual = fizzbuzz(0);
  var expected = 0;
  t.equal(actual, expected, 'fizzbuzz(0) should return 0');
  t.end();
});


test("fizzbuzz output", function(t){
  var actual = fizzbuzz(15);
  var expected = 'fizzbuzz';
  t.equal(actual, expected, 'fizzbuzz(15) should return fizzbuzz');
  t.end();
});


test("fizzbuzz output", function(t){
  var actual = fizzbuzz(7);
  var expected = 7;
  t.equal(actual, expected, 'fizzbuzz(7) should return 7');
  t.end();
});

test("fizzbuzz output", function(t){
  var actual = fizzbuzz(29);
  var expected = 29;
  t.equal(actual, expected, 'fizzbuzz(29) should return 29');
  t.end();
});


test('fizzbuzz output', function(t) {

  var actual = fizzbuzz(63);
  var expected = 'fizz';

  t.equal(actual, expected,'fizzbuzz(63) should return fizz');
  t.end();

});
