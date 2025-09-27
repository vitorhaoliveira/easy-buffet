import { useEffect, useState } from 'react'
import UsersDataTable from '@/components/ui/data-table/_components/users-datatable'

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

export default function Register() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers().then(setUsers).catch(console.error)
  }, [])

  return (
    <>
      <div className='bg-primary-50 flex-1 rounded-xl' />
      <div className='grid auto-rows-min gap-4 grid-cols-1'>
        <div className='aspect-video rounded-xl'>
          <UsersDataTable users={users} />
        </div>
      </div>
    </>
  )
}
