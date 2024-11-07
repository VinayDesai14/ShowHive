const cloudinary = require('cloudinary').v2
exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
    const options = { folder };
    if (height) options.height = height;
    if (quality) options.quality = quality;
    options.resource_type = "image"; // For handling base64-encoded images

    // Check if the file is a base64-encoded string
    if (file.startsWith("data:image")) {
        return await cloudinary.uploader.upload(file, options);
    } else {
        // Use the tempFilePath if it’s a file path
        return await cloudinary.uploader.upload(file.tempFilePath, options);
    }
};
