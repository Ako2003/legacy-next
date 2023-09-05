async function deleteRoom(id){
    const res = await fetch(`https://my-next-legacy.vercel.app/api/rooms/${id}`,{
        method: 'DELETE',
        cache: 'no-cache'
    });
    return res;
}

export default deleteRoom;