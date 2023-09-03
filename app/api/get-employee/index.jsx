async function getEmployee(){
    const data = await fetch(process.env.NODE_ENV === 'production' ? process.env.PROD_API_URL : process.env.DEV_API_URL);
    const employees = await data.json();
    
    return employees;
}

export default getEmployee;