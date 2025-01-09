import { deleteSnippet } from "@/db/actions/snippets"
import { snippetsTable } from "@/db/schema"

type Props = {
  snippet: typeof snippetsTable.$inferSelect
  children: React.ReactNode
}

export default function SnippetDeleteButton(props: Props) {
  const handleDelete = deleteSnippet.bind(null, props.snippet.id)
  return (
    <form action={handleDelete}>
      <button className='cursor-pointer text-red-600 opacity-80 transition-opacity hover:opacity-100'>
        {props.children}
      </button>
    </form>
  )
}
