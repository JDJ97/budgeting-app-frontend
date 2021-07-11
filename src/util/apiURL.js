export const apiURL = () =>{
    console.log("In API URL Func, ", process.env.NODE_ENV)
    if (
        process.env.NODE_ENV === "development" ||
        process.env.NODE_ENV === 'test'
     ) {
        return 'http://localhost:3001'
 
    } return 'https://jdj-budgeting-app.herokuapp.com'
 }