const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function processImage() {
  try {
    const image = await loadImage('public/images/logo.jpg');
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    ctx.drawImage(image, 0, 0, image.width, image.height);
    const imageData = ctx.getImageData(0, 0, image.width, image.height);
    const data = imageData.data;
    
    // Background color is approximately (11, 14, 39)
    // We sample the top-left pixel
    const bgR = data[0];
    const bgG = data[1];
    const bgB = data[2];
    
    const tolerance = 40; // Strict tolerance for pure background
    const edgeTolerance = 80; // Softer tolerance for anti-aliased edges
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      const diffR = Math.abs(r - bgR);
      const diffG = Math.abs(g - bgG);
      const diffB = Math.abs(b - bgB);
      
      const maxDiff = Math.max(diffR, diffG, diffB);
      
      if (maxDiff < tolerance) {
        // Completely transparent
        data[i + 3] = 0;
      } else if (maxDiff < edgeTolerance) {
        // Partial transparency for smooth edges
        // Map maxDiff from [tolerance, edgeTolerance] to [0, 255]
        const alpha = Math.floor(((maxDiff - tolerance) / (edgeTolerance - tolerance)) * 255);
        data[i + 3] = alpha;
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('public/images/logo.png', buffer);
    console.log('Successfully saved logo.png with transparent background');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
