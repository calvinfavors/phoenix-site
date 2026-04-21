/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `phone` (text) - Contact's phone number
      - `service` (text) - Service they're interested in
      - `message` (text) - Additional project details
      - `created_at` (timestamptz) - When the submission was created
      - `read` (boolean) - Whether the submission has been read

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert new submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
