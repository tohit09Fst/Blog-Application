import {useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../../../service/api';
import { Grid, Box } from '@mui/material';
import Post from './Post';


export default function Posts() {
    const [posts, getPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const categories = searchParams.get('category');


    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({categories:categories || ''});
            if (response.isSuccess) {
                getPosts(response.data);
            }
        }
        fetchData();
    },[categories])

  return (
    <>
      {
        posts && posts.length>0?posts.map(post=>(
            <Grid item lg={3} sm={4} xs={12}>
 <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/details/${post._id}`}>
                            <Post post={post} />
                        </Link>
</Grid>
        )): <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>no data</Box>
      }
    </>
  )
}
