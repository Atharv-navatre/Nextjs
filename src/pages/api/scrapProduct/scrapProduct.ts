import puppeteer from "puppeteer";
import f_scrap from "./scrap";
import compareProduct from "./compareProduct"
import { browser } from "process";


// product title selector
const amazonTitleSelector = "span#productTitle";
const flipkartTitleSelector = "span.B_NuCI";

// product price selector
const amazonPriceSelector = "span.a-price-whole";
const flipkartPriceSelector = "div._30jeq3._16Jk6d";

// product image selector 
const amazonImageSelector = "img#landingImage";
const flipkartImageSelector = "img._396cs4._2amPTt._3qGmMb";

// product description selector
const amazoanDescriptionSelector = "ul.a-unordered-list.a-vertical.a-spacing-mini";
const flipkartDescriptionSelector = "div._1mXcCf";

// product rating selector 
const amazoanRatingSelector = "span.a-icon-alt";
const flipkartRatingSelector = "div._3LWZlK";

//product search link
const amazoanSearchLink = "https://www.amazon.in/s?k="
const flipkartSearchLink = "https://www.flipkart.com/search?q=$";

//product link picker selector while second product is been scraped
const amazoanLinkPicker = "a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal";
const flipkartLinkPicker = "a._1fQZEK";



async function scrapProduct(url: any, ecommercePlatform: any) {
    try {

        //Scrap product

        let f_scrapData, s_scrapData;
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        const platform1 = "Amazoan";
        const platform2 = "Flipkart";



        if (ecommercePlatform == "amazoan") {
            await page.goto(`https://www.google.com/search?q=${url}`);
            const productUrlVal = await page.$eval("a[jsname=UWckNb]", (element: any) => element.href);
            await page.goto(productUrlVal);
            f_scrapData = await f_scrap(page, productUrlVal, platform1, amazonTitleSelector, amazonPriceSelector, amazonImageSelector, amazoanDescriptionSelector, amazoanRatingSelector);

            await page.goto(`https://www.google.com/search?q=${flipkartSearchLink}${f_scrapData?.title}`);
            const productUrl = await page.$eval("a[jsname=UWckNb]", (element: any) => element.href);
            await page.goto(productUrl);
            s_scrapData = await f_scrap(page, productUrl, platform2, flipkartTitleSelector, flipkartPriceSelector, flipkartImageSelector, flipkartDescriptionSelector, flipkartRatingSelector);
        }
        else if (ecommercePlatform == "flipkart") {
            await page.goto(url);
            s_scrapData = await f_scrap(page, url, platform2, flipkartTitleSelector, flipkartPriceSelector, flipkartImageSelector, flipkartDescriptionSelector, flipkartRatingSelector);


            await page.goto(`https://www.google.com/search?q=${amazoanSearchLink}${s_scrapData?.title}`);
            const productUrlVal = await page.$eval("a[jsname=UWckNb]", (element: any) => element.href);
            await page.goto(productUrlVal);
            console.log(productUrlVal);
            f_scrapData = await f_scrap(page, productUrlVal, platform1, amazonTitleSelector, amazonPriceSelector, amazonImageSelector, amazoanDescriptionSelector, amazoanRatingSelector);

        }
        else {
            // scrap from amazoan platform through title provided by the user
            await page.goto(`https://www.google.com/search?q=${amazoanSearchLink}${url}`);
            const productUrlVal = await page.$eval("a[jsname=UWckNb]", (element: any) => element.href);
            console.log(productUrlVal);
            await page.goto(productUrlVal);
            f_scrapData = await f_scrap(page, productUrlVal, platform1, amazonTitleSelector, amazonPriceSelector, amazonImageSelector, amazoanDescriptionSelector, amazoanRatingSelector);
            if (f_scrapData?.title == null) {

                const url = await page.$eval("a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal", (element: any) => element.href);
                await page.goto(url);
                f_scrapData = await f_scrap(page, url, platform1, amazonTitleSelector, amazonPriceSelector, amazonImageSelector, amazoanDescriptionSelector, amazoanRatingSelector);
            }

            // scrap from flipkart platform through title provided by the upper statements
            await page.goto(`https://www.google.com/search?q=${flipkartSearchLink}${f_scrapData?.title.replace(/[^\w\s]/gi, '')}`);
            const productUrl = await page.$eval("a[jsname=UWckNb]", (element: any) => element.href);
            await page.goto(productUrl);
            s_scrapData = await f_scrap(page, productUrl, platform2, flipkartTitleSelector, flipkartPriceSelector, flipkartImageSelector, flipkartDescriptionSelector, flipkartRatingSelector);
            if (s_scrapData?.title == null) {
                const url = await page.$eval("a._1fQZEK", (element: any) => element.href);
                await page.goto(url);
                s_scrapData = await f_scrap(page, url, platform2, flipkartTitleSelector, flipkartPriceSelector, flipkartImageSelector, flipkartDescriptionSelector, flipkartRatingSelector);
            }
        }
        let comparedDetails = await compareProduct(f_scrapData, s_scrapData);
        browser.close();
        return (comparedDetails);


    } catch (error) { }
}

export default scrapProduct;