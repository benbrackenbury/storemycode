import { db } from '@/db'
import { snippetsTable } from '@/db/schema'
import SnippetDeleteButton from './SnippetDeleteButton'

export default async function SnippetList() {
  const snippets = await db.select().from(snippetsTable)

  return (
    <ul className='flex flex-col'>
      {snippets.map((snippet, index) => {
        return (
          <li
            key={index}
            className='bg-foreground/5 flex flex-col gap-4 rounded-xl p-4'
          >
            <div className='flex justify-between'>
              <span className='text-xl font-medium'>{snippet.title}</span>
              <SnippetDeleteButton snippet={snippet}>
                Delete
              </SnippetDeleteButton>
            </div>
            <pre className='text-sm'>
              {snippet.content}
            </pre>
          </li>
        )
      })}
    </ul>
  )
}
