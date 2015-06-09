"use strict";

var Promise = require('es6-promise').Promise
    // just Node?
    // var fetch = require('node-fetch')
    // Browserify?
require('whatwg-fetch') //--> not a typo, don't store as a var

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
	// debugger
    var now = new Date()
    var HMS = [now.getHours(), now.getMinutes(), now.getSeconds()]

    var text = `${HMS[0]}:${HMS[1]}:${HMS[2]}`
    document.querySelector('.container').innerHTML = text

    var range = [24, 60, 60]
    var values = HMS.map((v, i) => Math.floor(v / range[i] * 255))
    // var color = `rgb(${values.join(',')})`
    var color = '#'+values.map((v) => v.toString(16)).join('')
    console.log(color)
    document.body.style['background-color'] = color


    document.querySelector('.hexadecimal').innerHTML = values.map((v) => v.toString(16)).join(':')

    document.querySelector('.container hr".style.width')

}

setInterval(clock,1000)