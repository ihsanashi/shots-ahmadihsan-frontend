CREATE DATABASE shots_ahmadihsan;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  alt_text VARCHAR(50) NOT NULL,
  caption TEXT,
  location TEXT,
  aws_s3_path TEXT NOT NULL,
  cloudinary_path TEXT NOT NULL,
  taken_at timestamp with time zone default NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL,
  last_modified_at timestamp with time zone NOT NULL
);

CREATE TABLE stories (
  id SERIAL PRIMARY KEY,
  alt_text VARCHAR(50) NOT NULL,
  caption TEXT,
  location TEXT,
  aws_s3_path TEXT NOT NULL,
  cloudinary_path TEXT NOT NULL,
  taken_at timestamp with time zone default NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL,
  last_modified_at timestamp with time zone NOT NULL
);

CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  caption TEXT,
  location TEXT,
  aws_s3_path TEXT NOT NULL,
  cloudinary_path TEXT NOT NULL,
  taken_at timestamp with time zone default NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL,
  last_modified_at timestamp with time zone NOT NULL
);