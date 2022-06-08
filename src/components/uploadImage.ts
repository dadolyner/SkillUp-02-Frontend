import { generateUploadURL } from "../api/s3";
import axios from "../api/axios";


const UploadImageToS3 = async (inputFile: any) => {
    try {
        const s3Options = { headers: { 'Content-Type': 'image/png' } };
        const url = await generateUploadURL();
        await axios.put(url, inputFile.current.files[0], s3Options);
        const imageUrl = url.split('?')[0];
        return imageUrl;
    } catch (error) { }
};

export default UploadImageToS3;