import dbConnect from "@/util/mongo";
import Store from "@/models/Store";

const handler = async (req, res) => {
    const { method } = req;

    if (method === "GET") {
        try{
            const stores = await Store.find();
            res.status(200).json(stores);
        }
        catch(error) {
            res.status(500).json(error);
        }
    }
    else if (method === "POST") {
        try{
            const store = await Store.create(req.body);
            res.status(201).json(store);
        }
        catch(error) {
            res.status(500).json(error);
        }
    }
};
export default handler;