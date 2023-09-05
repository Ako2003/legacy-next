import Room from "@/lib/models/room.model";
import { connectToDB } from "@/lib/mongo";

async function POST(req, res) {
    await connectToDB();
    try{
      const { number, floor, available, price, description } = req.body;
      const room = Room.create({
        number,
        floor,
        available,
        price,
        description
      });
      const rooms = await Room.find({});
      res.status(200).json(rooms);
    }
    catch (error) {
      // Handle validation 
      res.status(400).json({ statusCode: 400, message: error.message });
    }
}

// Create Get request
async function GET(req, res) {
    await connectToDB();
    try{
      const rooms = await Room.find({});
      res.status(200).json(rooms);
    }
    catch (error) {
      // Handle validation 
      res.status(400).json({ statusCode: 400, message: error.message });
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await POST(req, res);
    } else if (req.method === 'GET') {
        await GET(req, res);
    }
}
