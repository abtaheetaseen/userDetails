import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UserDetails from './components/UserDetails';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
    .then(res => {
      console.log(res.data);
      setUsers(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err.message);
      setError(err.message);
      setLoading(false)
    })
  }, [])

  if(loading){
    return <div className='flex items-center justify-center'>
    <div className="loading loading-ring loading-lg min-h-screen "></div>
</div> 
  }

  if(users?.length === 0 || error){
    return <div className='min-h-screen flex items-center justify-center'>
      <div>
        <h1 className='font-bold text-3xl'>No data to show</h1>
      </div>
    </div>
  }

  return (
    <>

    <div className='text-center'>
      <h1 className='font-extrabold text-3xl mt-8'>Total Users : {users?.length}</h1>
    </div>

      <div className='min-h-screen flex items-center justify-center'>

          <div>
          <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">

		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
			
      {
        users?.map((user, index) => <UserDetails key={index} user={user} />)
      }

		</div>
	</div>
</section>
          </div>

      </div>
    </>
  )
}

export default App
