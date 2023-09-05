import Room from "@/lib/models/room.model.js";
import { connectToDB } from "@/lib/mongo";

async function PUT(req, res){
    const { id } = req.query;
    await connectToDB();
    try {
        const { number, floor, available, price, description } = req.body;
        const room = await Room.findByIdAndUpdate(id, {
            number,
            floor,
            available,
            price,
            description
        });
        const rooms = await Room.find({});
        res.status(200).json(rooms);
    } catch (error) {
        res.status(400).json({ statusCode: 400, message: error.message });
    }
}

async function GET(req, res){
    const { id } = req.query;
    await connectToDB();
    try {
        const room = await Room.findById(id);
        res.status(200).json(room);
    } catch (error) {
        res.status(400).json({ statusCode: 400, message: error.message });
    }
}

async function DELETE(req, res){
    const { id } = req.query;
    await connectToDB();
    try {
        const room = await Room.findByIdAndDelete(id);
        const rooms = await Room.find({});
        res.status(200).json(rooms);
    } catch (error) {
        res.status(400).json({ statusCode: 400, message: error.message });
    }
}

export default async function handler(req, res){
    if (req.method === 'PUT'){
        await PUT(req, res);
    }
    else if (req.method === 'GET'){
        await GET(req, res);
    }
    else if (req.method === 'DELETE'){
        await DELETE(req, res);
    }
}