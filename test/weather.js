let wd = require("selenium-webdriver"),
	By = wd.By;
let driver;

before(async function() {
	this.timeout(30000);
    //Modificar por tu capabilities
	let appiumCapabilities = { 
		"platformName": "android",
			"appium:platformVersion": "11.0",
			"appium:diveceName": "emulator-5554",
			"appium:app": "C:\\Users\\AgustinPC\\Desktop\\APP\\app\\weather.apk",
			"appium:fullReset ": false,
		browserName: ''
	};
	driver = await new wd.Builder().usingServer("http://localhost:4723/wd/hub")
		.withCapabilities(appiumCapabilities).build();

	await driver.manage().setTimeouts( { implicit: 5000 } );
});

after(async function() {
	await driver?.quit();
});

const assert = require('assert');
//Borrar ver los selectores vas a tener
describe('Primer test ? ? ', function() {
	it('Verificar que la version sea Bienvenido a Weather APP', async ()=> {
		let textViewWelcomeMsg = await driver.findElement(By.id(
			'cfp402.devame.weatherapp:id/title'));
		let welcome = await textViewWelcomeMsg.getText();
		assert.ok(welcome == "Bienvenido a Weather APP");
		
	});
    it('Verificar que la version sea Bienvenido a Weather APP 2.0', async ()=> {
		let textViewWelcomeMsg = await driver.findElement(By.id(
			'cfp402.devame.weatherapp:id/title'));
		let welcome = await textViewWelcomeMsg.getText();
		assert.ok(welcome == "Bienvenido a Weather APPsadasd");
		
	});
});
