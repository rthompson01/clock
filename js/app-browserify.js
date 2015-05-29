"use strict";

var Promise = require('es6-promise').Promise
// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// es6 polyfills, powered by babel
require("babel/register")

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }

var clock = () => {
	var now = new Date(
	var text = '${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}'
	document.querySelector('.container').innerHTML = text



	var HMS = [now.getHours(), now.getMinutes(), now.getSeconds()]
	var range = [24, 60, 60]
	var values  = HMS.map((v, i) => Math.floor(v/range[i]*255))
	var color = 'rgb(${value.join(',')})'
	document.body.style['background-color'] = color
}

setInterval(clock. 1000)


//convert binary to hex

//option 1

//hexString = yourNumber.toString(16);
//yourNumber = parseInt(hexString, 16);

//option 2

var binhex = {

	convertBinarytoHexadecimal: function(binaryString)
{
	var res = '';	
	for (var i=0, i < binaryString.length; i+=4)
	{
		var bytes = binaryString.substri(i, 4);
		var decimal = parseInt(bytes, 2);
		var hex = decimal.toString(16);
		res += hex.toUpperCase();
	}
	return res;
},

	convertHexadecimalToBinary: function(hexString)
{
	var res = '';
	for (var i = 0; i < hexString.length; i++)
	{
		var decimal = parseInt(hexString.charAt(i), 16);
		var binary = this.leftPadding(decimal.toString(2), '0', 4);
		res += binary;
		}

	return res;
};

	leftPadding: function(inputString, padCharater, totalCharacters)
{
	if ( !inputString || !padCharater || inputString.length	>=totalCharacters)
	{
		return inputString;
	}

	var charsToAdd = (totalCharacters - inputString.length)/padCharater.length;
	for (var i = 0; i < charsToAdd; i++)
	{
		inputString = padCharater + inputString;
		}
	return inputString;
};