import React from 'react'

const Profile = () => {
  return (
    <div className='flex p-5 md:p-10 flex-col h-[80vh]   items-center justify-evenly'>
      <div className='flex  flex-col gap-5 md:gap-20 items-center w-full'>
        <div className='flex overflow-hidden items-center justify-center rounded-full h-[200px] w-[200px]'>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp" alt="No profile photo" />
        </div>
        <div>
          <h1 className='font-bold text-3xl'>Yashraj Shitole</h1>
        </div>
      </div>
      <div className='flex  flex-col gap-2  w-full'>
          <h1>Help & Support</h1>
          <h1>About</h1>
      </div>
    </div>
  )
}

export default Profile
