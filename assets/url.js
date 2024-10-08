function createTextFile() {
    const text = "Hi, how are you?"; // Content to write
    const blob = new Blob([text], { type: 'text/plain' }); // Create a blob
    const url = URL.createObjectURL(blob); // Create a URL for the blob

    const a = document.createElement('a'); // Create a link element
    a.href = url; // Set the href to the blob URL
    a.download = 'test.txt'; // Set the filename
    document.body.appendChild(a); // Append link to the document
    a.click(); // Programmatically click the link to trigger download
    document.body.removeChild(a); // Remove the link after download
    URL.revokeObjectURL(url); // Release the blob URL
}

createTextFile();
