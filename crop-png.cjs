const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function cropTransparentPixels() {
  try {
    const image = await loadImage('public/images/logo.png');
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    ctx.drawImage(image, 0, 0, image.width, image.height);
    const imageData = ctx.getImageData(0, 0, image.width, image.height);
    const data = imageData.data;
    
    let minX = image.width;
    let minY = image.height;
    let maxX = 0;
    let maxY = 0;
    
    // Find bounding box
    for (let y = 0; y < image.height; y++) {
      for (let x = 0; x < image.width; x++) {
        const index = (y * image.width + x) * 4;
        const alpha = data[index + 3];
        
        if (alpha > 0) { // If pixel is not fully transparent
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    
    // Add a tiny padding just to be safe
    const padding = 5;
    minX = Math.max(0, minX - padding);
    minY = Math.max(0, minY - padding);
    maxX = Math.min(image.width, maxX + padding);
    maxY = Math.min(image.height, maxY + padding);
    
    const cropWidth = maxX - minX;
    const cropHeight = maxY - minY;
    
    // Create new cropped canvas
    const croppedCanvas = createCanvas(cropWidth, cropHeight);
    const croppedCtx = croppedCanvas.getContext('2d');
    
    croppedCtx.drawImage(
      canvas, 
      minX, minY, cropWidth, cropHeight, 
      0, 0, cropWidth, cropHeight
    );
    
    const buffer = croppedCanvas.toBuffer('image/png');
    fs.writeFileSync('public/images/logo.png', buffer);
    console.log('Successfully cropped empty transparent space!');
  } catch (err) {
    console.error('Error cropping image:', err);
  }
}

cropTransparentPixels();
