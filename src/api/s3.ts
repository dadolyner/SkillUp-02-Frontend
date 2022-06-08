import aws from 'aws-sdk';

const region = process.env.REACT_APP_REGION
const bucket = process.env.REACT_APP_BUCKET
const accessKeyId = process.env.REACT_APP_ACCESS_KEY_ID
const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4',
});

export const generateUploadURL = async () => {
    const imageName = `${Date.now()}-${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}.png`;

    const uploadUrl = await s3.getSignedUrlPromise('putObject', {
        Bucket: bucket,
        Key: imageName,
        Expires: 60,
    });
    return uploadUrl;
}