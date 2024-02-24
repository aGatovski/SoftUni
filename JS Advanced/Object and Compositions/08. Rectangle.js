function rectangle(width, height, color) {
    let rectangleObj = {
        width,
        height,
        color: color[0].toLocaleUpperCase() + color.slice(1),
        calcArea() {
            return (width * height);
        }
    }
    return rectangleObj;
}