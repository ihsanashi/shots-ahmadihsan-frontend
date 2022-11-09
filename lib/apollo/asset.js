import { gql } from '@apollo/client';

export const ASSET_DATA = gql`
  query asset($ID: ID!) {
    Asset(id: $ID) {
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
