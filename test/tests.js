var assert = require('assert');
var request = require('request');

describe('it should get the homepage auth', () =>{
    it('should get the homepage auth',()=>{
        browser.url('https://datadynamo.local.zaraffasoft.com/');
        var logIn = $('.ui.yellow.small.button');
        var value = logIn.getValue();
        browser.debug();
        console.log(value);
        browser.click('.ui.yellow.small.button');

    });
});
