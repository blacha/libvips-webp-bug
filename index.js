const Sharp = require('sharp');
const fs = require('fs');

async function main() {
    const inputBuf = await fs.promises.readFile('./bug_tile.webp')
    
    // This dies
    console.log('WebP')
    const webp = await Sharp(inputBuf).extract({
        top: 128,
        left: 128,
        width: 256,
        height: 256,
    }).toBuffer()

    await Sharp(webp).toBuffer()
}

main().catch(e => {
    console.error(e)
    process.exit(1)
})
