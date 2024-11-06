import Post from "../model/post.js";



export const createPost = async (request, response) => {
    try {
        
        const post = await new Post(request.body);
        post.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
console.log(error)
        response.status(500).json(error);
    }
}



export const getAllPosts = async (request, response) => {
    let categories = request.query.categories;
    let posts;
    try {
        if (categories) 
            posts = await Post.find({ category: categories });
        else 
            posts = await Post.find({});
            
      return response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

       return response.status(200).json(post);
    } catch (error) {
       return response.status(500).json(error)
    }
}


export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
           return response.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

       return response.status(200).json('post updated successfully');
    } catch (error) {
       return response.status(500).json(error);
    }
}


export const deletePost = async (request, response) => {
     console.log(request.params.id);
    try {
        const post = await Post.findByIdAndDelete(request.params.id);
       
        if(!post){
            return response.status(404).json('post not found')
        }

       return response.status(200).json('post deleted successfully');
    } catch (error) {
        console.log(error);
       return response.status(500).json(error)
    }
}