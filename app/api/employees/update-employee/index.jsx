async function updateEmployee(id, name, surname, email, age){
    const res = await fetch(`https://my-next-legacy.vercel.app/api/employees/${id}`,{
        cache: 'no-store',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            surname,
            email,
            age
        },
        {
            mode: 'no-cors'
        })
    });
    return res;
}

export default updateEmployee;