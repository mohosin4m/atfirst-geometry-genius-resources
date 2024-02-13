function calculateRectangleArea(){
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width')
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText)
    console.log(width)

    // rectangle length value
    const rectangleLengthInput = document.getElementById('rectangle-length')
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)
    console.log(length)

    // calculate area
    const area = width * length
    console.log('area is the rectngle',area)

    // display rectangle area
    const rectangleAreaSpan =  document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area;
}