import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';


const config = {
    kit: {
        adapter: adapter({
            pages: 'build',       // Output directory for the generated pages
            assets: 'build',      // Output directory for the assets
            fallback: null,       // Set to 'index.html' for SPA, or leave null for a static site
            precompress: false    // Enable precompression of files if needed
        }),
        paths: {
            base: '', // Empty when deployed to root, adjust if hosted in a subdirectory
        }
    },
    preprocess: [
        preprocess({
            postcss: true          // Enable PostCSS, if used in your project
        })
    ]
};

export default config;
