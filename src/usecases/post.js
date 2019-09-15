// los usos de casos son funciones (acciones)
//que representean la interacciones del usuario con
// el sistema. 
                          
// en este ejemplo lo que el usuario esta haciendo
// en la aplicación es eliminar
// creo , o modificar un post

// ::::::::::::::::::::::::::::::::::::::::::::::.

// Los casos de usos usan a los modelos  para 
const Post = require ('../models/post')  

function create ({ title, date, readTime, description, author, image}) {
     const newPost = new Post ({   // creando un newPost del modelo Post // 
         title,
         description,
         author,
         date,
         readTime,
         image
     })                                       
     return newPost.save()
}



function getAll () {
    const allPost = Post.find()
    return allPost
}

async function deleteById (id) {
    const post = await Post.findById(id)
    const deletedPost = await Post.deleteOne(post)
    return deletedPost
  }


async function updateById (id, { title, date, readTime, description, author, image }) {
    const post = await Post.findById(id)
    const updatedPost = await Post.updateOne(post, {
      title,
      date,
      readTime,
      description,
      author,
      image
    })
    return updatedPost
  }


  module.exports = {
    create,
    getAll,
    deleteById,
    updateById
  }
  