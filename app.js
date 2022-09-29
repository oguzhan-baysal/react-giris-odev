1
import axios from "axios";

const getData = async (userId)=> {

// user ıd 

const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+userId)



// user post

const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+ userId);




console.log({user, posts});

}


export default getData;