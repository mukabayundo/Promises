
export function fetchPosts(){
fetch("https://jsonplaceholder.typicode.com/posts")
.then((Response)=> {
    return Response.json();
})
    

    .then((data)=> {
        console.log(data);
        return data;
      
    })

   .catch((error) => {
        console.log(error);
        return error;
    });

}
fetchPosts();

