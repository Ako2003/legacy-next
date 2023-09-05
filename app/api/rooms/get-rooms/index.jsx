async function getRooms(){
    const data = await fetch("https://my-next-legacy.vercel.app/api/rooms",{
        cache: "no-store"
    });
    const rooms = await data.json();
    
    return rooms;
}

export default getRooms;