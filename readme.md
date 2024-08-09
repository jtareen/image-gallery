# Image Gallery

This repository contains a responsive and dynamic image gallery built with HTML, CSS, and JavaScript. The gallery is designed to handle images of varying sizes and stack them seamlessly within their respective columns, creating a visually appealing layout. It’s ideal for showcasing a collection of images, whether it’s for a portfolio, a product showcase, or any other type of image collection.

## Features

- **Responsive Layout:** The gallery adjusts to different screen sizes, ensuring a great user experience on both mobile and desktop devices.
- **Dynamic Stacking:** Images of varying heights are stacked within their columns, utilizing available space efficiently and maintaining a cohesive design.
- **Lazy Loading:** Images are loaded as they come into view, improving performance and reducing initial load times.
- **Customizable Grid:** Easily customize the number of columns, spacing, and other layout settings to suit your needs.
- **High-Quality Images:** The gallery is optimized to handle high-resolution images without compromising on performance.

## Demo

Check out the live demo: [Demo Link](https://jtareen.github.io/image-gallery/)

## Installation

To use this image gallery in your project, simply clone or download the repository:

```bash
git clone https://github.com/jtareen/image-gallery.git
```

## Usage

1. **Include the HTML:**

   Add the following HTML structure to your webpage where you want the gallery to appear:

   ```html
   <div class="gallery">
       <div class="gallery-item"><img src="path-to-image1.jpg" alt="Image 1"></div>
       <div class="gallery-item"><img src="path-to-image2.jpg" alt="Image 2"></div>
       <div class="gallery-item"><img src="path-to-image3.jpg" alt="Image 3"></div>
       <!-- Add more gallery items as needed -->
   </div>
   ```

2. **Include the CSS:**

   Link to the provided CSS file in the `<head>` of your HTML document:

   ```html
   <link rel="stylesheet" href="path-to-gallery.css">
   ```

3. **Include the JavaScript:**

   Link to the JavaScript file before the closing `</body>` tag:

   ```html
   <script src="path-to-gallery.js"></script>
   ```

4. **Customize Settings (Optional):**

   You can customize the gallery by modifying the provided CSS and JavaScript files. Adjust the number of columns, spacing between images, and other settings as per your requirements.

## Performance Considerations

- **Optimize Images:** Ensure your images are optimized for the web to reduce load times and improve performance.
- **Lazy Loading:** The gallery supports lazy loading to improve initial load times, especially for pages with a large number of images.

## Contributing

Contributions are welcome! Feel free to fork this repository, make your changes, and submit a pull request.

## Contact

If you have any questions or need further assistance, feel free to contact me at [jtareen440@gmail.com](mailto:jtareen440@gmail.com).
