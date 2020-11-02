import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { post } from 'jquery'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(0)
    const [idFromButtonCick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
            setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/"+idFromButtonCick)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonCick])

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>
       
            
           <div>{post.title}</div>
           { 
           
           }
         
           
        </div>
    )
}

export default DataFetching
