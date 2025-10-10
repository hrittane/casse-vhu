import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const publicDir = path.join(process.cwd(), 'public');

function findImages(dir) {
    let images = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            images = images.concat(findImages(fullPath));
        } else if (/\.(jpe?g|png)$/i.test(file)) {
            images.push(fullPath);
        }
    }
    return images;
}

const images = findImages(publicDir);

for (const image of images) {
    const output = image.replace(/\.[^/.]+$/, ".webp");
    const command = `cwebp -q 80 "${image}" -o "${output}"`;
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Converted ${image} to ${output}`);
    });
}