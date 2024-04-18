import { NextApiRequest, NextApiResponse } from "next";
import scrapeAndStoreProduct from "./scrapAndStoreProduct";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const productUrl = req.query.url as string;

        const data = await scrapeAndStoreProduct(productUrl);
        let p1 = "", p2 = "";

        if (data?.f_scrapData.platform == "Flipkart") {

            p1 = "/assets/images/flipkartlogo.png";
            p2 = "/assets/images/amazoanlogo.png";

        }
        else {
            p1 = "/assets/images/amazoanlogo.png";
            p2 = "/assets/images/flipkartlogo.png";
        }

        const allData = {
            title1: data?.f_scrapData.title,
            savedRupees: data?.s_scrapData.price - data?.f_scrapData.price,
            price1: data?.f_scrapData.price,
            image1: data?.f_scrapData.image,
            des1: data?.f_scrapData.des,
            rating1: data?.f_scrapData.rating,
            url1: data?.f_scrapData.url,
            title2: data?.s_scrapData.title,
            price2: data?.s_scrapData.price,
            image2: data?.s_scrapData.image,
            des2: data?.s_scrapData.des,
            rating2: data?.s_scrapData.rating,
            url2: data?.s_scrapData.url,
            platform1logo: p1,
            platform2logo: p2,
            platform1:data?.f_scrapData.platform,
            platform2:data?.s_scrapData.platform
            
        };

        console.log(`HI SAVED RUPEE : ${allData.savedRupees}`);
        res.status(200).json({ allData });
    } catch (error) {
        console.error('Error running Puppeteer script:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}