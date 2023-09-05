import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    number: { type: String, required:true },
    floor: { type: String, required:true },
    available: { type: Boolean, required:true },
    price: { type: String, required:true },
    description: { type: String, required:true },
})

const Room = mongoose.models.Room || mongoose.model("Room", RoomSchema);

export default Room;