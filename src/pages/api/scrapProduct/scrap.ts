
async function f_scrap(page: any, url: any, platform:any,titleSelector: any, priceSelector: any, imageSelector: any, descSelector: any, ratingSelector: any) {
    try {
        //  await page.goto(`https://www.google.com/search?q=${url}`);
        //  const productUrlVal = await page.$eval("a[jsname=UWckNb]", (element: any) => element.href);
        //  console.log(productUrlVal);
        //  await page.goto(productUrlVal);



        const titleElement = await page.$(titleSelector);
        let title = null;
        if (titleElement) {
            title = await page.evaluate((element: any) => element.textContent?.trim(), titleElement);
        }

        const priceElement = await page.$(priceSelector);
        let price = null;
        if (priceElement) {
            price = await page.evaluate((element: any) => element.textContent?.trim().replace(/[\u20B9,.]/g, ''), priceElement);
        }

        const imageElement = await page.$(imageSelector);
        let image = null;
        if (imageElement) {
            image = await page.evaluate((element: any) => element.src, imageElement);
        }

        const descElement = await page.$(descSelector);
        let des = null;
        if (descElement) {
            des = await page.evaluate((element: any) => element.textContent?.trim(), descElement);
        }

        const ratingElement = await page.$(ratingSelector);
        let rating = null;
        if (ratingElement) {
            rating = await page.evaluate((element: any) => element.textContent?.trim().substring(0, 3).replace(/[\u20B9,]/g, '')

                , ratingElement);
        }

        
        if(platform == "amazoan"){
            const bankElement = await page.$('#itembox-InstantBankDiscount.span.a-truncate-cut');
            let bankOffer = null;
            if(bankElement){
                bankOffer =  await page.evaluate((element:any)=>element.textContent.trim(),bankElement);
                console.log(bankOffer);
                const bankElement2 = await page.$("")
            }
        }
        console.log({ title, price, image, des, rating, url });
        return ({ title, price, image, des, rating, url,platform });
    }
    catch (error) {
        console.error(`Product couldn't scrap ${error}`);
    }

}
export default f_scrap;
