import SnippetList from '@/components/SnippetList'
import { createSnippet } from '@/db/actions/snippets'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl'>Store My Code</h1>
      <p className='mt-2 text-xl'>
        Follow progress on the{' '}
        <Link
          className='underline underline-offset-2 opacity-80 transition-opacity duration-200 hover:opacity-100'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/benbrackenbury/storemycode'
        >
          Github
        </Link>
      </p>
      <div className='py-12'>
        <form className='flex max-w-96 flex-col gap-4' action={createSnippet}>
          <input type='text' name='title' placeholder='Title' />
          <textarea name='content' placeholder='Content...' />
          <button
            type='submit'
            className='bg-foreground text-background cursor-pointer rounded-lg text-xl font-bold opacity-80 transition-opacity hover:opacity-100'
          >
            Submit
          </button>
        </form>
      </div>
      <div className='py-12'>
        <h2 className='text-2xl mb-6'>Snippets</h2>
        <Suspense>
          <SnippetList />
        </Suspense>
      </div>
    </div>
  )
}
