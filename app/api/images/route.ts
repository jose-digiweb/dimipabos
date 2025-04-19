import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const S3 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
});

export async function GET() {
  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.R2_BUCKET_NAME,
    });

    const response = await S3.send(command);

    const imagesWithUrls = await Promise.all(
      response.Contents?.map(async object => {
        // Generate a signed URL for each object
        const getObjectCommand = new GetObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME,
          Key: object.Key,
        });

        const signedUrl = await getSignedUrl(S3, getObjectCommand, {
          expiresIn: 3600, // URL expires in 1 hour (adjust as needed)
        });

        return {
          key: object.Key,
          size: object.Size,
          lastModified: object.LastModified,
          url: signedUrl, // Add the signed URL here
        };
      }) || []
    );

    return NextResponse.json({
      images: imagesWithUrls,
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}
