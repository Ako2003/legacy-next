async function createEmployee(name, surname, email, age){
    const res = await fetch(`http://localhost:3000/api/employees`,{
        method: 'POST',
        cache: 'no-store',
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

export default createEmployee;