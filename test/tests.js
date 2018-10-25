var assert = require('assert');
var request = require('request');
var should = require('should');
// var chai = require('chai'); 
// var chaiWebdriver = require('chai-webdriverio').default;
// chai.use(chaiWebdriver(browser)); 
// var assert = chai.assert;    // Using Assert style
//var expect = chai.expect;    // Using Expect style
// var should = chai.should();

describe('it should get the homepage auth', () =>{
    it('should get the homepage auth',()=>{
        browser.url('https://datadynamo.local.zaraffasoft.com/');
        var logIn = $('.ui.yellow.small.button');
        var value = logIn.getText();
        console.log(value);

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

describe('searching for dropdown elements',()=>{
    it('open dropdown',()=>{
        browser.url('https://datadynamo.local.zaraffasoft.com/');
        var browse = $('//*[@id="dd-header"]/div[3]/div/div/div/div[1]/div');
        browse.click();
        var counter = $$('.dd-dropdown-link').filter((href) => {
            return href.isVisible();
        });
        expect(counter.length).to.be.equal(5);
    });
});

describe('dataset handling',() =>{
    it('get dropdown element page',()=>{
        browser.url('https://datadynamo.local.zaraffasoft.com/');
        var browse = $('//*[@id="dd-header"]/div[3]/div/div/div/div[1]/div');
        browse.click();
        var menu = $('//*[@id="dd-header"]/div[3]/div/div/div/div[1]/div/div[2]');
        should.exist(menu);
        var dataset = $('a[href="/en/items/dataset"]');
        dataset.click();
    });

     it('url is equal to dataset page',()=>{
        expect(browser.getUrl()).to.equal('https://datadynamo.local.zaraffasoft.com/en/items/dataset');
    });
});
