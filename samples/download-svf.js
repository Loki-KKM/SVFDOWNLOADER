/*
 * Example: downloading SVF assets for all viewables in a Model Derivative URN.
 * Usage:
 *     set APS_CLIENT_ID=g52vzzN7IGofaM4QAZGWARyuiBkMctsnzm5yYAEe70rQK0LJ
 *     set APS_CLIENT_SECRET=1cJJ7XLtGM29MdhPjqtUWgQvBS0v2oVWvbk3lhvynf3gtZVB0wAwV7tRyAMjHdrw
 *     export APS_REGION=<your region> # optional, can be one of the following: "US", "EMEA", "APAC"
 *     node download-svf.js dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZzUydnp6bjdpZ29mYW00cWF6Z3dhcnl1aWJrbWN0c256bTV5eWFlZTcwcnFrMGxqLWJhc2ljLWFwcC9yYWNhZHZhbmNlZHNhbXBsZXByb2plY3QyMDIzLnJ2dA C:\Users\TWINUser-26\Downloads\downloadSVF
 */

const { SvfDownloader, TwoLeggedAuthenticationProvider } = require('..');
const  APS_CLIENT_ID = "g52vzzN7IGofaM4QAZGWARyuiBkMctsnzm5yYAEe70rQK0LJ"
const APS_CLIENT_SECRET = "1cJJ7XLtGM29MdhPjqtUWgQvBS0v2oVWvbk3lhvynf3gtZVB0wAwV7tRyAMjHdrw"
const APS_REGION  = 'US'

async function run(urn, outputDir = '.') {
    try {
        console.log('Starting download process...');
        console.log('URN:', urn);
        console.log('Output Directory:', outputDir);

        const authenticationProvider = new TwoLeggedAuthenticationProvider(APS_CLIENT_ID, APS_CLIENT_SECRET);
        console.log('Authentication provider initialized.');

        const downloader = new SvfDownloader(authenticationProvider);
        console.log('Downloader initialized.');

        const download = downloader.download(urn, { outputDir, log: console.log, region: APS_REGION });
        console.log('Download started.');

        await download.ready;
        console.log('Download completed.');
    } catch (error) {
        console.error('Error during download process:', error);
    }
}

run(process.argv[2], process.argv[3]);