import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';

(async () => {

    const files = await imagemin(['images/*.{jpg,png}'], {
        destination: 'build-images',
        plugins: [
            imageminWebp({quantity: 50})
        ]
    });

    console.log(files)

    let i = 1
    fs.readdirSync("./build-images").forEach(name => {
        fs.copyFileSync("./build-images/" + name, "./show-images/" + i + ".webp")
        i++
    })

    console.log("Number of image:" + i)
})();


