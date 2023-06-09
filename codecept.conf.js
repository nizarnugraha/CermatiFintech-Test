const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run

if (process.env.ENVIRONMENT != "local") {
  setHeadlessWhen(true)
}

if (process.env.ENVIRONMENT == "dev") {
  var config = require('./config/dev.json');
} else {
  var config = require('./config/local.json')
}

if (config) {
  var type = config.default_type;
  if (process.env.MERCHANT_TYPE) {
    type = process.env.MERCHANT_TYPE;
  } else {
    process.env.MERCHANT_TYPE = type;
  }
  var merchant = undefined;

  // SETUP CONFIGURATION FOR HOST
  process.env.HOST_CERMATI = config.host_cermati;
}

cfg = {
  output: './output',
  helpers: {
    Playwright: {
      keepBrowserState: true,
      restart: false,
      windowSize: 'maximize'
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    },
  },
  include: {
    I: './steps_file.js',
    registerPage: './pages/registerPage.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir: "output"
    }
  },
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}


if ((process.env.IS_RUNNING_LOCAL && process.env.IS_RUNNING_LOCAL == "true") || (!process.env.ENVIRONMENT || process.env.ENVIRONMENT == "local")) {
  cfg.helpers.Playwright = {
    url: 'https://demo.vercel.store/',
    restart: false,
    keepBrowserState: true,
    show: true,
    browser: 'chromium'
  }
} else {
  let wsEndpoint = ''
  if (process.env.WEBSOCKET_ENDPOINT_MOON) {
    wsEndpoint = process.env.WEBSOCKET_ENDPOINT_MOON
  }
  cfg.helpers.Playwright = {
    url: 'https://demo.vercel.store/',
    show: false,
    browser: 'chromium',
    chromium: {
      browserWSEndpoint: {
        wsEndpoint: wsEndpoint
      }
    }
  }
}

if (process.env.TEST_FILE_PATH) {
  cfg.tests = `./test/${process.env.TEST_FILE_PATH}`;
} else if (process.env.STRING_MODULE) {
  cfg.tests = `./test/${process.env.STRING_MODULE}/*_test.js`
} else {
  cfg.tests = `./test/**/*_test.js`
}

exports.config = cfg