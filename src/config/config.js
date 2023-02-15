const { ENVCODE = 'dev' } = process.env;
const fs=require('fs');
/**
 * loads the configurations details from respective environment
 */
const configDetails = JSON.parse(fs.readFileSync(`src/config/${ENVCODE}-config.json`));

module.exports = {
    ...configDetails
}