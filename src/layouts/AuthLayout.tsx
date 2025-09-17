import { Outlet } from 'react-router-dom'
import { BsArrowUpRightSquareFill } from 'react-icons/bs'

export default function AuthLayout() {
  return (
    <div className='flex flex-row p-0 m-0 min-h-[100dvh]'>
      <aside
        className='
          flex items-center w-[65%] h-[100dvh]
          bg-gradient-to-tr from-primary-800 to-primary-400
          max-[950px]:hidden
        '
      >
        <div className='flex flex-col gap-2 ml-20 text-white'>
          <h1 className='m-0 text-5xl font-black'>Easy Buffet</h1>
          <p className='m-0 text-white'>A solução para seu buffet!</p>
          <a
            className='
              mt-4 items-center px-4 py-2 rounded-lg
              bg-primary-600 hover:bg-primary-500
              text-white font-medium text-base no-underline
              transition-colors flex justify-between
            '
            rel='noopener noreferrer'
            title='Link para o Google'
            aria-label='Link para o Google'
            href='https://www.google.com/'
            target='_blank'
          >
            Saiba mais
            <BsArrowUpRightSquareFill className='' />
          </a>
        </div>
      </aside>
      <main
        className='
          w-[35%] flex justify-center items-center
          max-[950px]:w-full max-[950px]:h-[100dvh]
          max-[950px]:bg-gradient-to-tr max-[950px]:from-primary-800 max-[950px]:to-primary-400
        '
      >
        <Outlet />
      </main>
    </div>
  )
}
