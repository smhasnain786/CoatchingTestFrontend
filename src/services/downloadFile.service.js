import axios from 'axios';

export const downloadFile = async (url, fileName) => {
    try {
        const fileExtension = fileName.split('.').pop().toLowerCase();
        let contentType;

        // Set the content type based on the file extension
        switch (fileExtension) {
            case 'pdf':
                contentType = 'application/pdf';
                break;
            case 'jpeg':
            case 'jpg':
                contentType = 'image/jpeg';
                break;
            case 'png':
                contentType = 'image/png';
                break;
            case 'gif':
                contentType = 'image/gif';
                break;
            case 'ppt':
                contentType = 'application/vnd.ms-powerpoint';
                break;
            case 'pptx':
                contentType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                break;
            case 'doc':
                contentType = 'application/msword';
                break;
            case 'docx':
                contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                break;
            case 'xls':
                contentType = 'application/vnd.ms-excel';
                break;
            case 'xlsx':
                contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                break;
            case 'txt':
                contentType = 'text/plain';
                break;
            default:
                contentType = 'application/octet-stream';
                break;
        }

        const response = await axios.get(url, {
            responseType: 'blob',
            headers: {
                'Accept': contentType,
            },
        });

        // Use the content type from the response if available
        const actualContentType = response.headers['content-type'] || contentType;

        const blob = new Blob([response.data], { type: actualContentType });
        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;

        // Use a hidden iframe for better compatibility
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        iframe.contentWindow.document.body.appendChild(link);
        link.click();

        // Clean up
        setTimeout(() => {
            document.body.removeChild(iframe);
            window.URL.revokeObjectURL(blobUrl);
        }, 100);

    } catch (error) {
        console.error('Download failed:', error);
        throw error; // Re-throw the error for the caller to handle
    }
};