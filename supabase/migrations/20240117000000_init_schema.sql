-- Create apps table
create table apps (
  id uuid default gen_random_uuid() primary key,
  uaid text not null unique,
  title text not null,
  description text,
  thumbnail_url text,
  gallery_urls text[] default array[]::text[],
  external_link text,
  category_id uuid,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  metadata jsonb default '{}'::jsonb
);

-- Create categories table
create table categories (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  parent_id uuid references categories(id),
  display_order int default 0,
  slug text not null unique
);

-- Add foreign key reference to apps
alter table apps
add constraint apps_category_id_fkey
foreign key (category_id)
references categories(id);

-- Enable Row Level Security (RLS)
alter table apps enable row level security;
alter table categories enable row level security;

-- Create policy for public read access
create policy "Allow public read access on apps"
on apps for select
to public
using (true);

create policy "Allow public read access on categories"
on categories for select
to public
using (true);
