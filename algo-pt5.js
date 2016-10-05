//composing object

var book = {}

book.apple = 0.67
book.milk = 1.49
book.avocado = 1.49

//finding price of avocado from book
console.log(book.avocado)


var phoneBook = {}

phoneBook.jenny = 8675309
phoneBook.emergency = 911

console.log(phoneBook.jenny)


var voted = {}

var checkVoter = function(name) {
	if ( name in voted ) {
		console.log( name + " I admire your civic enthusiasm, but you can't vote more than once.")
	} else {
		voted[name] = name
		console.log( name + " Go out there and vote!")
	}
	return voted
}

checkVoter("tom")
checkVoter("mike")
checkVoter("and ike")
checkVoter("llama")
checkVoter("llama")
checkVoter("jerry")



