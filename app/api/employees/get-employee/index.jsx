async function getEmployee(id){
    // Return user only with given id
    const res = await fetch(`https://my-next-legacy.vercel.app/api/employees/${id}`,{
        cache: 'no-store'
    });
    const employee = await res.json();
    return employee;
}

export default getEmployee;