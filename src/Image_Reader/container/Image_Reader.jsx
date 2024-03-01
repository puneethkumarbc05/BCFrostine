import React from 'react'
import "../css/Image_Reader.css"

const Image_Reader = () => {

    async function _handleChangeImageUpload(e) {
        const file = e.target.files[0]
        e.target.value = ''

        const reader = new FileReader();

        reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
                // Convert image to grayscale to improve OCR accuracy
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = avg;
                    data[i + 1] = avg;
                    data[i + 2] = avg;
                }
                ctx.putImageData(imageData, 0, 0);

                // Perform OCR
                // Tesseract.recognize(canvas.toDataURL())
                //     .then(function (result) {
                //         document.getElementById('output').innerText = result.text;
                //     })
                //     .catch(function (error) {
                //         console.error('Error:', error);
                //     });
            };
            img.src = event.target.result;
            console.log(event.target.result, 'bcf text')
        };

        reader.readAsDataURL(file);
    }
    return (
        <div>
            <input type='file' onChange={_handleChangeImageUpload} />
        </div>
    )
}

export default Image_Reader
