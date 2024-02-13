/**
 * objective: get base, height of a triangle.Calculate the area by using the provide formula. and then display the area
 * step=1: get base value of the triangle
 * step=2: added an id in the base input field
 * step=3: use getElementbyId to acces the input field
 * step=4: get value from the input field (value is string now)
 * step=5: convert the value to a number. Use parsFloat 
 */



function calculateTriangleArea(){
    // get triangle vase value
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangaleBaseText =triangleBaseInput.value;
    const base = parseFloat(triangaleBaseText)
    console.log(base)

    // get triangle height vlaue
    const triangleHeightInput = document.getElementById('tringle-height')
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height)

    // calculate area
    const area = 0.5 * base * height;
    console.log('area is the triangle is', area)

    // display triangle area
    const triangleAreaSpan = document.getElementById('tringle-area')
    triangleAreaSpan.innerText = area
}