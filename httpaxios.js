import axios from 'axios';
import { response } from 'express';
//get uesd to get data /resources from a server
axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(response=>console.log('get respons:',response.data))
        .catch(error=>console.log('error:',error));
    //post used to post data the data to the server
    const postData = 
    {
        Title: 'Ms',
        FName: 'sam',
        body: 'this is a demo how to use post method',
    }
    axios.post('https://jsonplaceholder.typicode.com/posts',postData);
    //put used to update the data already present on the server
    const putData = 
    {
        Title: 'Ms',
        FName: 'sam',
        body: 'this is a demo how to use post method',
    }
    axios.post('https://jsonplaceholder.typicode.com/posts',postData)
    .then(response=>console.log('put response',response.data))
    .catch(error=>console.log('there was error',error));

//delet



