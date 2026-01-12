function uploadImage() {
    const input = document.getElementById('imageUpload');
    const preview = document.getElementById('imagePreview');
    const text = document.getElementById('imageText');
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Clear previous content
            preview.innerHTML = '';
            
            // Create and add new image
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = "Uploaded Image";
            preview.appendChild(img);
            
            // Update text
            text.textContent = "Image uploaded successfully!";
            text.style.color = "black";
        };
        
        reader.readAsDataURL(input.files[0]);
    } else {
        alert('Please select an image file first.');
    }
}

function clearImage() {
    const preview = document.getElementById('imagePreview');
    const text = document.getElementById('imageText');
    const input = document.getElementById('imageUpload');
    
    // Clear the image
    preview.innerHTML = '';
    
    // Reset the file input
    input.value = '';
    
    // Reset text
    text.textContent = "No image uploaded yet";
    text.style.color = "#666";
}

document.getElementById('imageUpload').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        uploadImage();
    }
});
