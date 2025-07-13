const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');

const folderPath = path.join(__dirname, '../data');
const outputFolder = path.join(__dirname, '../parsedData');

fs.readdir(folderPath, (err, files) => {
    if (err) {
        return console.error('Error reading folder:', err);
    }

    const jsonFiles = files.filter(file => file.endsWith('.json'));

    jsonFiles.forEach(file => {
        const filePath = path.join(folderPath, file);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${file}:`, err);
                return;
            }

            try {
                data = JSON.parse(data);
                const items = data[1]?.props?.pageProps?.initialData?.searchResult?.itemStacks?.[0]?.items || [];
                
                const itemList = items.map(item => ({
                    id: item.id,
                    name: item.name,
                    type: item.catalogProductType,
                    price: item.price,
                    rating: item.rating?.averageRating,
                    numReviews: item.rating?.numberOfReviews,
                    shortDescription: item.shortDescription
                }));

                if (itemList.length > 0) {
                    const parser = new Parser();
                    const csv = parser.parse(itemList);
                    const outPath = path.join(outputFolder, file.replace('.json', '.csv'));
                    fs.writeFileSync(outPath, csv);
                    console.log(`✅ Saved: ${outPath}`);
                } else {
                    console.warn(`⚠️ No items found in ${file}`);
                }

            } catch (e) {
                console.error(`❌ Invalid JSON in file ${file}:`, e.message);
            }
        });
    });
});
