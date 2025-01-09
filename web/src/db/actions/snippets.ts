'use server'

import { db } from '@/db'
import { revalidatePath } from 'next/cache'
import { snippetsTable } from '../schema'
import { eq } from 'drizzle-orm/sql'

export async function createSnippet(formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    content: formData.get('content'),
  }

  const { title, content } = rawFormData as Record<string, string>
  if (!title || !content) {
    return
  }

  const snippet: typeof snippetsTable.$inferInsert = {
    title,
    content,
  }
  await db.insert(snippetsTable).values(snippet)

  revalidatePath('/')
}

export async function deleteSnippet(id: number) {
  await db.delete(snippetsTable).where(eq(snippetsTable.id, id));
  revalidatePath('/')
}
