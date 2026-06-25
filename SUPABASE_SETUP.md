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
CREATE TABLE users_collection (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE users_collection ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON users_collection
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public select" ON users_collection
  FOR SELECT USING (true);
```

4. Click **Run**

## Step 3: Access Your Secret Page
- Your secret page is now available at `/secret`
- Password: `5251`
- Once authenticated, you can add and view user entries

That's it! Your site is now connected to Supabase.
