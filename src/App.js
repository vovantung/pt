
import './App.css';

import axios from 'axios';

import { useEffect } from 'react';
import "../src/tx.css"

function App() {


  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      // const res = await axios.get('http://webapi.local/api/product/getall_');
// alert(123)
      const r1 = {
        method: 'GET'
      }
      const response1 = await fetch('http://18.142.253.74:8080/health-check', r1)
      const itemsCart = await response1.json()
      // if (itemsCart !== undefined) {
        alert(itemsCart)
      // }
    };

    fetchPosts();
  }, []);

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  
  return (
    <div className='container mt-5'>
      {/* <h3 className='text-primary mb-3'>List Product</h3>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        pageCurent = {currentPage}
      /> */}
    </div>
  );
}

export default App;
