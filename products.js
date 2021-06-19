const puppeteer = require('puppeteer');


let urlBase = 'https://www.amazon.com/gp/bestsellers/?ref_=nav_cs_bestsellers_8a080d3d7b55497ea1bdd97b7cff8b7b';
// urlBase = 'https://www.anandmaratha.com/';
const id=[];
var option  = {
    "headless": true
}

const fs = require('fs');
async function run () {
    const browser = await puppeteer.launch(option);
    const page = await browser.newPage();        
    await page.goto(urlBase);
   // let content = await page.content();
   // let ele =  content.$("#zg_browseRoot")
    let texts = await page.evaluate(() => {
       let element = document.documentElement.innerHTML;
      
        return element;
    });
    // texts = texts.split(/(\s+)/);
    // texts = texts.filter((a)=> a.includes('https://www.amazon.com/Best-Sellers'));
    // texts.map((line)=>{
    //     let regex = /"((?:\\.|[^"\\])*)"/;
    //     return line.match(regex);
    // })
    let jsonContent = JSON.stringify(texts);
    //jsonContent = texts;

    fs.writeFileSync('page.html',jsonContent);
    //console.log(texts);
   
    browser.close();
}

run();