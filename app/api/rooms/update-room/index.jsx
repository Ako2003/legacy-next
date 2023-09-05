async function updateRoom(id, number, floor, available, price, description){
    const res = await fetch(`https://my-next-legacy.vercel.app/api/rooms/${id}`,{
        method: 'PUT',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            number,
            floor,
            available,
            price,
            description
        },
        {
            mode: 'no-cors'
        })
    });
    return res;
}

export default updateRoom;