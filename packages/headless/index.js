const puppeteer = require('puppeteer');

const extensionPath = '/Users/majie/mw/project/extension_webrtc/packages/tabstream';
const extensionId = 'akniocjldhfgnjjlicnkhpokcldndlig'

const startChrome = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`,
      '-flag-switches-begin',
      '--enable-experimental-web-platform-features',
      '-enable-features=ElementCapture',
      '--flag-switches-end',
      '--show-component-extension-options',
      '--allow-legacy-extension-manifests',
      '--enable-benchmarking',
      '--enable-experimental-extension-apis',
      '--force-dev-mode-highlighting',
      '--embedded-extension-options',
      '--whitelisted-extension-id=akniocjldhfgnjjlicnkhpokcldndlig',
    ],
    ignoreHTTPSErrors: true,
    executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
  });
  // /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --flag-switches-begin --enable-experimental-web-platform-features --enable-features=ElementCapture --flag-switches-end

  //  --flag-switches-begin --enable-experimental-web-platform-features --enable-features=ElementCapture --flag-switches-end


  const page = await browser.newPage();
  await page.goto(`https://github.com`);



}

startChrome();