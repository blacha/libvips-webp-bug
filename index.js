const Sharp = require('sharp');
const fs = require('fs');

async function main() {
    const inputBuf = fs.readFileSync('./bug_tile.webp')
    const sharp = Sharp(inputBuf)
    sharp.extract({
        top: 128,
        left: 128,
        width: 256,
        height: 256,
    })
    const webp = await sharp.toBuffer()
    await Sharp(webp).toBuffer()
}

main().catch(console.error)
