const sharp = require('sharp');

module.exports = (imageBuffer) => {
    const limitB = 1024 * 1024;
    const buffer = sharp(imageBuffer).clone();
    return buffer
        .metadata()
        .then(({format, size, width}) => {
            const scaledWidth = width > 375 ? 375 : width;
            if(format === 'png'){
                let options = {
                    compressionLevel: 8,
                    quality: 80,
                    adaptiveFiltering: true,
                    force: true
                };
                return buffer
                    .resize({
                        width: scaledWidth,
                        options: {
                            withoutEnlargement: true
                        }
                    })
                    .png(options)
                    .toBuffer()
                    .then(data => {
                        return Buffer.from(data);
                    })
            } else {
                throw new Error(`${data.format} is not support image type`);
            }
        })
        .catch(error => {
            console.error(error.message);
        })
};
