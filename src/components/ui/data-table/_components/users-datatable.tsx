'use client'

import type { ColumnDef } from '@tanstack/react-table'
import type { User } from '../_interfaces/user'
import { DataTable } from '../data-table'


const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => {
      return <div>{row.getValue('id')}</div>
    }
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      return <div>{row.getValue('name')}</div>
    }
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => {
      return <div>{row.getValue('email')}</div>
    }
  },
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => {
      return <div>{row.getValue('id')}</div>
    }
  },
  {
    accessorKey: 'company.name',
    id: 'companyName',
    header: 'Company',
    cell: ({ row }) => {
      return <div>{row.getValue('companyName')}</div>
    }
  }
]

interface Props {
  users: User[]
}

export default function UsersDataTable({ users }: Props) {
  return <DataTable columns={columns} data={users} />
}