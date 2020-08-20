const Sharp = require('sharp');
const fs = require('fs');

async function main() {
    const inputBuf = await fs.promises.readFile('./bug_tile.webp')

    console.log('Png')
    const png = await Sharp(inputBuf).extract({
        top: 128,
        left: 128,
        width: 256,
        height: 256,
    }).png().toBuffer()
    fs.writeFileSync('./ouptut.png', png);
    
    await Sharp(png).toBuffer()
    
    console.log('WebP')
    const webp = await Sharp(inputBuf).extract({
        top: 128,
        left: 128,
        width: 256,
        height: 256,
    }).toBuffer()

    // This dies
    await Sharp(webp).toBuffer()
}

main().catch(e => {
    console.error(e)
    process.exit(1)
})
