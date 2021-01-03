
const cheerio = require('cheerio');  
const request = require('request-promise');
const { ACUrls } = require('./urls'); 
const {GTAUrls} = require('./urls') 
const {WitcherUrls} = require('./urls')
const {GOWUrls} = require('./urls')
const {HPUrls} = require('./urls')
const {LOTRUrls} = require('./urls')
const fs = require('fs');

async function ACScraper(){
    let dataArr = []
    for(let i= 0; i<ACUrls.length ; i++){
        const response = await request(ACUrls[i])
        let $ = cheerio.load(response)
        let title = $('div[class="page-header__main"] > h1[id="firstHeading"]').text()
        let posterLink = $('aside img[class="pi-image-thumbnail"]').attr('src')
        let developer = $('div[data-source="Developer"] a').text()
        let platforms = []
        $('div[data-source="Platform"] ul li').each((i, element) =>{
            let platform = $(element).text()
            platforms.push(platform);
        });
        let dataObj = {
            title,
            posterLink,
            developer,
            platforms
        }
        dataArr.push(dataObj)
    }
    fs.writeFileSync( "./data.json" , JSON.stringify(dataArr, null , 4), {encoding: 'utf-8'});
    console.log(dataArr)
}

async function GTAScrapper(){
    let dataArr = []
    for(let i= 0; i<GTAUrls.length ; i++){
        const response = await request(GTAUrls[i])
        let $ = cheerio.load(response)
        let title = $('div[class="page-header__main"] > h1[id="firstHeading"]').text()
        let posterLink = $('aside img[class="pi-image-thumbnail"]').attr('src')
        let developer = $('div[data-source="developers"] a').text()
        let platforms = []
        $('div[data-source="platforms"] p a').each((i, element) =>{
            let platform = $(element).text()
            platforms.push(platform);
        });
        let dataObj = {
            title,
            posterLink,
            developer,
            platforms
        }
        dataArr.push(dataObj)
    }
    fs.writeFileSync( "./GTAData.json" , JSON.stringify(dataArr, null , 4), {encoding: 'utf-8'});
    console.log(dataArr)
        
}

async function GOWScrapper(){
    let dataArr = []
    for(let i= 0; i<GOWUrls.length ; i++){
        const response = await request(GOWUrls[i])
        let $ = cheerio.load(response)
        let title = $('div[class="page-header__main"] > h1[id="firstHeading"]').text()
        let posterLink = $('aside img[class="pi-image-thumbnail"]').attr('src')
        let developer = $('div[data-source="developer"] a').text()
        let platforms = []
        $('div[data-source="platform"] a').each((i, element) =>{
            let platform = $(element).text()
            platforms.push(platform);
        });
        let dataObj = {
            title,
            posterLink,
            developer,
            platforms
        }
        dataArr.push(dataObj)
    }
    fs.writeFileSync( "./GOWData.json" , JSON.stringify(dataArr, null , 4), {encoding: 'utf-8'});
    console.log(dataArr)
        
}
async function WitcherScrapper(){
    let dataArr = []
    for(let i= 0; i<WitcherUrls.length ; i++){
        const response = await request(WitcherUrls[i])
        let $ = cheerio.load(response)
        let title = $('div[class="page-header__main"] > h1[id="firstHeading"]').text()
        let posterLink = $('aside img[class="pi-image-thumbnail"]').attr('src')
        let developer = $('div[data-source="Developers"] a').text()
        let platforms = []
        $('div[data-source="Platform"] a').each((i, element) =>{
            let platform = $(element).text()
            platforms.push(platform);
        });
        let dataObj = {
            title,
            posterLink,
            developer,
            platforms
        }
        dataArr.push(dataObj)
    }
    fs.writeFileSync( "./WitcherData.json" , JSON.stringify(dataArr, null , 4), {encoding: 'utf-8'});
    console.log(dataArr)
        
}
async function HPScrapper(){
    let dataArr = []
    for(let i= 0; i<HPUrls.length ; i++){
        const response = await request(HPUrls[i])
        let $ = cheerio.load(response)
        let title = $('div[class="page-header__main"] > h1[id="firstHeading"]').text()
        let posterLink = $('aside img[class="pi-image-thumbnail"]').attr('src') 
        let budget = $('div[data-source="budget"] div').text()
        let director = $('div[data-source="director"] a').text()
        let revenue = $('div[data-source="revenue"] div').text()
        let stars = []
        $('div[data-source="starring"] a').each((i, element) =>{
            let star = $(element).text()
            stars.push(star);
        });
        let dataObj = {
            title,
            posterLink, 
            stars,
            director,
            budget,
            revenue
        }
        dataArr.push(dataObj)
    }
    fs.writeFileSync( "./HarryPotterData.json" , JSON.stringify(dataArr, null , 4), {encoding: 'utf-8'});
    console.log(dataArr)
        
}

async function LOTRScrapper(){
    let dataArr = []
    for(let i= 0; i<LOTRUrls.length ; i++){
        const response = await request(LOTRUrls[i])
        let $ = cheerio.load(response)
        let title = $('div[class="page-header__main"] > h1[id="firstHeading"]').text()
        let posterLink = $('aside img[class="pi-image-thumbnail"]').attr('src') 
        let budget = $('div[data-source="budget"] div').text()
        let director = $('div[data-source="director"] a').text()
        let revenue = $('div[data-source="revenue"] div').text()
        let stars = []
        $('div[data-source="starring"] a').each((i, element) =>{
            let star = $(element).text()
            stars.push(star);
        });
        let dataObj = {
            title,
            posterLink, 
            stars,
            director,
            budget,
            revenue
        }
        dataArr.push(dataObj)
    }
    fs.writeFileSync( "./LOTRData.json" , JSON.stringify(dataArr, null , 4), {encoding: 'utf-8'});
    console.log(dataArr)
        
}

LOTRScrapper()