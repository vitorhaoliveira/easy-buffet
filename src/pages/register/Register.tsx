'use client'

import { useEffect, useMemo, useState } from 'react'
import type { User } from '@/components/ui/data-table/_interfaces/user'
import UsersDataTable from '@/components/ui/data-table/_components/users-datatable'
import SearchBar from '@/components/ui/search-bar/SearchBar'

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL

async function fetchUsers(): Promise<User[]> {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Falha ao carregar registros (${response.status})`)
  }
  return response.json()
}

export default function Register() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [query, setQuery] = useState('')

  const filteredUsers = useMemo(() => {
    if (!query) return users
    const q = query.toLowerCase()
    return users.filter((u) => {
      const companyName = u.company?.name ?? ''
      return (
        String(u.id).includes(q) ||
        u.name.toLowerCase().includes(q) ||
        u.username.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        companyName.toLowerCase().includes(q)
      )
    })
  }, [users, query])

  useEffect(() => {
    let isMounted = true
    const load = async () => {
      try {
        setError(null)
        const data = await fetchUsers()
        if (isMounted) setUsers(data)
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Erro ao carregar'
        if (isMounted) setError(message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    load()

    const interval = setInterval(load, 30000)
    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <SearchBar value={query} onChange={setQuery} placeholder='Pesquisar usuários…' className='w-full' />
      <div className='grid auto-rows-min gap-4 grid-cols-1'>
        <div className='aspect-video rounded-xl'>
          {loading && <div>Carregando registros…</div>}
          {error && <div className='text-red-600'>Erro: {error}</div>}
          {!loading && !error && <UsersDataTable users={filteredUsers} />}
        </div>
      </div>
    </>
  )
}
