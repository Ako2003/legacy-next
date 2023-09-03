async function getEmployee(){
    const data = await fetch('http://localhost:3000/api/employees');
    const employees = await data.json();
    
    return employees;
}

export default getEmployee;