# Supabase Setup Instructions

To complete the setup, you need to create tables in your Supabase database.

## Step 1: Go to Supabase Dashboard
1. Visit https://app.supabase.com
2. Sign in to your account
3. Select your project: `xtfvqbuxmtelfmdllifc`

## Step 2: Create the Tables
1. Go to the **SQL Editor** section
2. Click **New Query**
3. Copy and paste the following SQL:

```sql
-- Drop existing tables and policies if they exist
DROP TABLE IF EXISTS users_collection CASCADE;
DROP TABLE IF EXISTS customer_support CASCADE;

-- Create users_collection table
CREATE TABLE users_collection (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create customer_support table
CREATE TABLE customer_support (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  category TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'open',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users_collection ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_support ENABLE ROW LEVEL SECURITY;

-- Users Collection Policies
CREATE POLICY "Allow public insert on users_collection" ON users_collection
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public select on users_collection" ON users_collection
  FOR SELECT USING (true);

CREATE POLICY "Allow public update on users_collection" ON users_collection
  FOR UPDATE USING (true);

CREATE POLICY "Allow public delete on users_collection" ON users_collection
  FOR DELETE USING (true);

-- Customer Support Policies
CREATE POLICY "Allow public insert on customer_support" ON customer_support
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public select on customer_support" ON customer_support
  FOR SELECT USING (true);

CREATE POLICY "Allow public update on customer_support" ON customer_support
  FOR UPDATE USING (true);

CREATE POLICY "Allow public delete on customer_support" ON customer_support
  FOR DELETE USING (true);
```

4. Click **Run**

## Step 3: Verify the Setup
1. Go to the **Table Editor** section
2. You should see both `users_collection` and `customer_support` tables
3. Click on each to see the columns

## Step 4: Features Available
- **Secret Page** (`/secret`) - Password: `5251` - View collected user emails and names
- **Contact Page** (`/contact`) - Customer service form for inquiries and support requests
- **Participate Page** (`/participate`) - Tesla claim form that saves user data automatically

## Troubleshooting
If data isn't saving:
1. Check the browser console (F12) for error messages
2. Go to Supabase Dashboard → SQL Editor → Check recent queries for errors
3. Verify the RLS policies are properly set (Table Editor → table name → RLS dropdown)

That's it! Your site is now fully connected to Supabase with multiple data collection features.
