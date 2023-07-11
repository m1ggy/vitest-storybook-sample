import SteamMarketFetcher from "steam-market-fetcher";
import dotenv from "dotenv";
dotenv.config();
const marketplace = new SteamMarketFetcher({
    currency: "PHP",
    format: "json",
});

export async function getCSGOItem(name: string, cookie?: string) {
    if (cookie) cookie = process.env.STEAM_SECURE_COOKIE || "";
    const params = { market_hash_name: name, cookie };
    const price = await marketplace.getItemPrice(params);
    const image = await marketplace.getItemImage(params);
    const history = await marketplace.getItemPriceHistory(params);

    return {
        price,
        image,
        history,
    };
}

export function getItemListings(query: string) {
    return marketplace.getMarketListings({
        query,
    });
}
