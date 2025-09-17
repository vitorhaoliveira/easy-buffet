import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Une classes condicionais e resolve conflitos do Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

/*
 // Versão simples sem dependências:
 export function cn(...classes: any[]) {
   return classes
     .flat(Infinity)
     .filter(Boolean)
     .join(' ')
 }
*/