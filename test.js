let xlsx = require('xlsx') //安装包地址 https://www.npmjs.com/package/xlsx
let data = xlsx.readFile('./url.xlsx')


require('chromedriver');
let assert = require('assert')
var webdriver = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build();
var By = webdriver.By;
driver.manage().window().maximize();

let userlogin = async function(username,password){
    await driver.get('http://118.31.19.120:3000/signin')
    await driver.findElement(By.id('name')).sendKeys(username)
    await driver.findElement(By.id('pass')).sendKeys(password);
    await driver.findElement(By.css('.span-primary')).click();
    await driver.manage().deleteAllCookies();
}


let jsondata= xlsx.utils.sheet_to_json(data.Sheets['Sheet3']);

let i =0;
let run = async function(){
    for (let userinfo of jsondata){
        let username = userinfo.username;
        let pass = userinfo.password;
        console.log(i++ , username,pass);
        await userlogin(username,pass);
    }
}

run();