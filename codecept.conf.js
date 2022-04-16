const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: '/Users/rodolfofarleypereiralacerda/Downloads/appsqazando/app-release.apk',
      desiredCapabilities:{
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: "Nexus 5X API 31",
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'AutomacaoTeste'
}