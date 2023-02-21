import dbConnect from "@/util/mongo";
import Store from "@/models/Store";

const handler = async (req, res) => {
    const { method, query:{id} } = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const store = await Store.findById(id);
            res.status(200).json(store);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else if (method === "PUT") {
    }
    else if (method === "DELETE") {
        try {
            const store = await Store.findByIdAndDelete(id);
            res.status(200).json("Store has been deleted");
        }
        catch(error){
            res.status(500).json(error)
        }
    }
};
export default handler;