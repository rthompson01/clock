"use strict";

var Promise = require('es6-promise').Promise
    // just Node?
    // var fetch = require('node-fetch')
    // Browserify?
require('whatwg-fetch') //--> not a typo, don't store as a var

// es6 polyfills, powered by babel
require("babel/register")

var clock = () => {
    var now = new Date();
    var clock = `${now.getHours()}:${ now.getMinutes()}:${ now.getSeconds()}`
    var minutes = (now.getMinutes().toString().length==1) ? "0" + d.getMinutes():d.getMinutes()
    var seconds = (now.getSeconds().toString().length==1) ? "0" + d.getSeconds():d.getSeconds()
    var correct = `${now.getHours()}:${minutes}:${seconds}`
    document.querySelector(".container").innerHTML = correct; 
    

    var HMS = [now.getHours(), now.getMinutes(), now.getSeconds()]
    var range = [24, 60, 60]
    var values = HMS.map((v, i) => Math.floor(v / range[i] * 255))
    var color = `rgb(${values.join(',')})`
    document.body.style['background'] = color
    var S = `${3*d.getSeconds()}px`
    document.body.querySelector('hr').style['width'] = S

document.querySelector(".hovercontainer").innerHTML =  values.map((v) => v.toString(16)).join(':');
    
}
setInterval(clock, 1000)