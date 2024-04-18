
async function compareProduct(f_scrapData:any,s_scrapData:any) {
    if (parseInt(f_scrapData?.price) < parseInt(s_scrapData?.price)) {
        return ({ f_scrapData, s_scrapData });
    }
    else if (parseInt(f_scrapData?.price) > parseInt(s_scrapData?.price)) {
        const temp = await f_scrapData;
        f_scrapData = await s_scrapData;
        s_scrapData = await temp;
        return ({ f_scrapData, s_scrapData });
    }
    else {
        if (parseFloat(f_scrapData?.rating) > parseFloat(s_scrapData?.rating)) {
            return ({ f_scrapData, s_scrapData });
        }
        else {
            const temp = await f_scrapData;
            f_scrapData = await s_scrapData;
            s_scrapData = await temp;
            return ({ f_scrapData, s_scrapData });
        }
    }
    
}
export default compareProduct;