CREATE DATABASE shots_ahmadihsan;

CREATE TABLE ig_photos (
  id SERIAL PRIMARY KEY,
  caption TEXT,
  location TEXT,
  path TEXT NOT NULL,
  aws_s3_path TEXT NOT NULL,
  cloudinary_path TEXT NOT NULL,
  is_hidden BOOLEAN default FALSE,
  taken_at timestamp with time zone NOT NULL,
  last_modified_at timestamp with time zone NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE ig_stories (
  id SERIAL PRIMARY KEY,
  caption TEXT,
  location TEXT,
  path TEXT NOT NULL,
  aws_s3_path TEXT NOT NULL,
  cloudinary_path TEXT NOT NULL,
  is_hidden BOOLEAN default FALSE,
  taken_at timestamp with time zone NOT NULL,
  last_modified_at timestamp with time zone NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE ig_videos (
  id SERIAL PRIMARY KEY,
  caption TEXT,
  location TEXT,
  path TEXT NOT NULL,
  aws_s3_path TEXT NOT NULL,
  cloudinary_path TEXT NOT NULL,
  is_hidden BOOLEAN default FALSE,
  taken_at timestamp with time zone NOT NULL,
  last_modified_at timestamp with time zone NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL
);