async function getRoom(id){
    // Return user only with given id
    const res = await fetch(`https://my-next-legacy.vercel.app/api/rooms/${id}`,{
        cache: 'no-store'
    });
    const room = await res.json();
    return room;
}

export default getRoom;