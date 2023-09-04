async function deleteEmployee(id){
    const res = await fetch(`https://my-next-legacy.vercel.app/api/employees/${id}`,{
        method: 'DELETE',
        cache: 'no-cache'
    });
    return res;
}

export default deleteEmployee;