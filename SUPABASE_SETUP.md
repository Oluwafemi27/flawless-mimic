# Supabase Setup Instructions

To complete the setup, you need to create a table in your Supabase database.

## Step 1: Go to Supabase Dashboard
1. Visit https://app.supabase.com
2. Sign in to your account
3. Select your project: `xtfvqbuxmtelfmdllifc`

## Step 2: Create the Table
1. Go to the **SQL Editor** section
2. Click **New Query**
3. Copy and paste the following SQL:

```sql
-- Drop existing table and policies if they exist
DROP TABLE IF EXISTS users_collection CASCADE;

-- Create the table
CREATE TABLE users_collection (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users_collection ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY "Allow public insert" ON users_collection
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow anyone to select/read
CREATE POLICY "Allow public select" ON users_collection
  FOR SELECT
  USING (true);

-- Create policy to allow anyone to update
CREATE POLICY "Allow public update" ON users_collection
  FOR UPDATE
  USING (true);

-- Create policy to allow anyone to delete
CREATE POLICY "Allow public delete" ON users_collection
  FOR DELETE
  USING (true);
```

4. Click **Run**

## Step 3: Verify the Setup
1. Go to the **Table Editor** section
2. You should see the `users_collection` table
3. Click on it to see the columns

## Step 4: Access Your Secret Page
- Your secret page is now available at `/secret`
- Password: `5251`
- Once authenticated, you can add and view user entries

## Troubleshooting
If users aren't saving:
1. Check the browser console (F12) for error messages
2. Go to Supabase Dashboard → SQL Editor → Check recent queries for errors
3. Verify the RLS policies are properly set (Table Editor → users_collection → RLS dropdown)

That's it! Your site is now connected to Supabase.
