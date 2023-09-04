async function getEmployees(){
    const data = await fetch(process.env.NODE_ENV === 'production' ? process.env.PROD_API_URL : process.env.DEV_API_URL,{
        cache: "no-store"
    });
    const employees = await data.json();
    
    return employees;
}

export default getEmployees;