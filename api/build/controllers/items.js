import { getCSGOItem } from "../utils/CSGOItems.js";
export async function getItem(req, res) {
    try {
        const { name } = req.body;
        const item = await getCSGOItem(name);
        res.status(200).json(item);
    }
    catch (error) {
        res.status(400).json(JSON.stringify(error));
    }
}
