import React from 'react'

const UserDetails = ({user}) => {

  return (
    <div className='hover:border-blue-500 hover:border-[1px] hover:rounded-lg hover:duration-300'>
      <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                    <div className='flex items-center justify-start gap-5 mt-5'>

                    <img className='w-16 h-16 rounded-full border-2 border-black' src={user?.avatar} alt="avatar" />

                    <div>
                        <h1 className='font-bold'>{user.profile.username}</h1>
                    </div>
                    </div>
                </summary>
                <div className="py-6 pt-0 -mt-4 dark:text-gray-600 flex items-center justify-center">
				
                <div className='w-10/12'>
                <p className='font-bold'>First Name : <span className='font-normal'>{user.profile.firstName}</span></p>

                <p className='font-bold'>Last Name : <span className='font-normal'>{user.profile.lastName}</span></p>

                <p className='font-bold'>Email : <span className='font-normal'>{user.profile.email}</span></p>

                <p className='font-bold'>Job Title : <span className='font-normal'>{user.jobTitle}</span></p>

                <p className='font-bold'>Bio : <span className='font-normal'>{user.Bio}</span></p>
                </div>

                </div>
			</details>
    </div>
  )
}

export default UserDetails
