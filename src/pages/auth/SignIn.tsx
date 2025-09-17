import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignIn() {
  return (
    <div className='flex flex-col items-start justify-center gap-2 w-[80%] max-w-[420px]'>
      <div className='flex flex-col items-start justify-center mb-4'>
        <h2 className='m-0 text-[2rem] leading-none font-bold max-[950px]:text-primary-50'>Entrar</h2>
        <p className='m-0 text-black max-[950px]:text-primary-50'>Acesse sua conta</p>
      </div>

      <form
        onSubmit={event => {
          event.preventDefault()
          // ...submit logic...
        }}
        className='flex flex-col items-start justify-center gap-4 w-full'
      >
        <div className='grid w-full items-center gap-3'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' placeholder='voce@gmail.com' />
        </div>

        <div className='grid w-full items-center gap-3'>
          <Label htmlFor='email'>Senha</Label>
          <Input type='email' id='email' placeholder='•••••••' />
        </div>

        <Button
          type='submit'
          className='
            w-full items-center gap-2 rounded-md bg-primary-700 px-3 py-1.5 text-sm/6 font-semibold text-primary-50 
            shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-primary-50 
            data-hover:bg-primary-600 data-open:bg-primary-700 cursor-pointer transition-colors hover:bg-primary-500'
        >
          Entrar
        </Button>

        <div className='w-full flex justify-center'>
          <a
            href='#'
            className='mt-4 text-sm text-primary-600 underline font-bold max-[950px]:text-primary-50'
          >
            Esqueci minha senha
          </a>
        </div>
      </form>
    </div>
  )
}