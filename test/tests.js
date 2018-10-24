var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('/')

describe('it should get the homepage auth', () =>{
    var logIn = $('#ui yellow small button')
    logIn.click()
});
