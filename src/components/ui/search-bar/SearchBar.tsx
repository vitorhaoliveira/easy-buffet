import { useId } from 'react'

interface SearchBarProps {
  value: string
  placeholder?: string
  onChange: (value: string) => void
  className?: string
}

export default function SearchBar({ value, placeholder = 'Pesquisar…', onChange, className }: SearchBarProps) {
  const inputId = useId()

  return (
    <div className={className}>
      <label htmlFor={inputId} className='sr-only'>{placeholder}</label>
      <input
        id={inputId}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-500'
      />
    </div>
  )
}


