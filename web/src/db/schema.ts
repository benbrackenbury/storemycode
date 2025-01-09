import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const snippetsTable = pgTable('snippets', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  tags: varchar(),
  content: varchar().notNull(),
  dateCreated: timestamp().notNull().defaultNow(),
})
