import { connectMongo } from "../../../utils/connectDB";
import Test from "../../../models/testModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 *
 */

export default async function addTest(req, res) {
  try {
    const { name, email } = req.body;
    await connectMongo();
    console.log("Connected");

    const test = await Test.create(req.body);

    res.json(test);
  } catch (error) {
    res.json({ error });
  }
}
