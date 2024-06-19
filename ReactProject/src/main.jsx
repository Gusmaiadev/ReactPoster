import React from 'react'
import ReactDOM from 'react-dom/client'
import NewPost, {action as NewPostAction} from './routes/NewPost.jsx';
import Posts, {loader as postLoader} from './routes/Posts.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails.jsx'
import RootLayout from './routes/RootLayout.jsx';
import './index.css'

const router = createBrowserRouter([
  {path:'/', 
    element: <RootLayout/>, 
    children: [
      {
        path: '/', 
        element: <Posts/>, 
        loader: postLoader,
        children: [
          {path: '/create-post', element: <NewPost/>, action: NewPostAction},
          {path: '/:postId', element: <PostDetails/>, loader: postDetailsLoader}
        ],  
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
