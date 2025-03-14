import axios from "axios";
import suCrypt from "./suCrypt";

async function fetchMainImageForProduct(product_id) {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}product_media?product_id=${product_id}`
        );
        const imageData = response.data.data; 

        console.log("Image Data:", imageData); // Debugging log

        if (!Array.isArray(imageData) || imageData.length === 0) {
            return null; // Return null if no images exist
        }

        const expectedMainImageName = suCrypt(product_id); // Example: "TnpnMg=="

        // Find the main image by checking `media_name`
        const mainImage = imageData.find(imageObj =>
            imageObj.media_name.includes(expectedMainImageName)
        );

        // Select the main image or fallback to the first one
        let image = mainImage ? mainImage.media_name : imageData[0].media_name;

        // Prepend the directory path
        image = `${process.env.REACT_APP_IMAGE_URL}product_images/${image}`;

        return image;
    } catch (error) {
        console.error("Error fetching images:", error);
        return null;
    }
}

export default fetchMainImageForProduct;
