import { gql } from '@apollo/client';

export const HOME_DATA = gql`
  query allAssets {
    allAsset(sort: { taken_at: DESC }) {
      _id
      caption
      location
      aws_s3_path
      cloudinary_path
      taken_at
      last_modified_at
    }
  }
`;
