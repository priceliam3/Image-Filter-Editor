var image = null;

function upload() {
    var imgcanvas = document.getElementById("can");
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function makeGray() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setBlue(avg);
        pixel.setGreen(avg);
    }
    var imgcanvas = document.getElementById("can");
    image.drawTo(imgcanvas);
}

function makeFilterTwo() {
    for (var pixel of image.values()) {
        var tr = (0.593 * pixel.getRed()) + (0.869 * pixel.getGreen()) + (0.889 * pixel.getBlue());
        var tg = (0.749 * pixel.getRed()) + (0.386 * pixel.getGreen()) + (0.668 * pixel.getBlue());
        var tb = (0.372 * pixel.getRed()) + (0.134 * pixel.getGreen()) + (0.331 * pixel.getBlue());
        if (pixel.getBlue() > pixel.getRed()) {
            pixel.setRed(255);
        }
        else {
            pixel.setRed(tr);
        }
        if (pixel.getGreen() > pixel.getRed()) {
            pixel.setRed(pixel.getRed() + (pixel.getRed() * 0.158));
        }
        else {
            pixel.setRed(tg);
        }
        if (pixel.getRed() > 255) {
            pixel.setRed(tb);
        }
    }
    var imgcanvas = document.getElementById("can");
    image.drawTo(imgcanvas);
}

    function makeSepia() {
        for (var pixel of image.values()) {
            var tr = (0.493 * pixel.getRed()) + (0.709 * pixel.getGreen()) + (0.289 * pixel.getBlue());
            var tg = (0.399 * pixel.getRed()) + (0.586 * pixel.getGreen()) + (0.108 * pixel.getBlue());
            var tb = (0.172 * pixel.getRed()) + (0.594 * pixel.getGreen()) + (0.161 * pixel.getBlue());
            if (tr > 255) {
                pixel.setRed(255)
            }
            else {
                pixel.setRed(tr);
            }
            if (tg > 255) {
                pixel.setGreen(255)
            }
            else {
                pixel.setRed(tg);
            }
            if (tb > 255) {
                pixel.setBlue(255)
            }
            else {
                pixel.setRed(tb);
            }
        }
        var imgcanvas = document.getElementById("can");
        image.drawTo(imgcanvas);
}
    
function reset() {
    var imgcanvas = document.getElementById("can");
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function imageIsLoaded() {
    if (image == null) {
        alert("Image not loaded");
        return;
    }
}

function doGray() {
    if (imageIsLoaded()) {
        makeGray();
    }
}