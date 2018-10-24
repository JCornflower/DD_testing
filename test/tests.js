var assert = require('assert');
var request = require('request');

describe('it should get the homepage auth', () =>{
    it('should get the homepage auth',()=>{
        browser.url('https://datadynamo.local.zaraffasoft.com/');
        var logIn = $('.ui.yellow.small.button');
        var value = logIn.getText();
        //browser.debug();
        console.log(value);
        //browser.click('.ui.yellow.small.button');

    });

    it('should get the login page', ()=>{
        browser.url('https://datadynamo.local.zaraffasoft.com/');
        var logIn = $('.ui.yellow.small.button');
        logIn.click();
        var url = browser.getUrl();
        console.log(url);
    });

    it('should enter as superuser', ()=>{
        browser.url('https://datadynamo.local.zaraffasoft.com/en/login');
        // var submit=$('.ui.large.fluid.primary.button');
        var submit=$('button.ui.large.fluid.primary.button');


        browser.setValue('input[name="email"]','superuser@dataclassroom.com');
        browser.setValue('input[name="password"]','changemesoon');
        submit.click();
        browser.waitForVisible('.ui.header', 5000);
        var log2 = $('.ui.header');
        var text = log2.getText();
        console.log(text);
    });
});

describe('searching for dataset',()=>{
    it('go to dataswt page',()=>{
        browser.url('https://datadynamo.local.zaraffasoft.com/');
        var browse = $('.ui.button.dropdown.dd-item-type-select.pink');
        browse.click();
        //var dropdown = $('.dd-dropdown-link');
        var dataset = browse.selectByIndex(0);
        dataset.click();
    });
});
