const puppeteer = require('puppeteer');
const fs = require('fs');
url = "http://167.99.99.33:8081/hw4/index"
let scrape = async () => {
   // Actual Scraping goes Here...
   //const browser = await puppeteer.launch({headless:false});
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   page.setCacheEnabled(false);
   var start = new Date().getTime();
   desktop_userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36';
   mobile_userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
   page.setUserAgent(mobile_userAgent)
   viewport = {width: 600, height: 400, isMobile: true}
   page.setViewport(viewport)
   await page.goto(url);
   await page.waitFor(10);
   // Scrape

   var end = await page.evaluate(() => {
         var finish = new Date().getTime();
         return finish;
         });
   //page.close();
   browser.close();
   browser.disconnect();
   var time = end-start;
   console.log("done");
   return time;
};

scrape().then((value) => {
      //console.log("Finished: " + value); // Success!
   });
