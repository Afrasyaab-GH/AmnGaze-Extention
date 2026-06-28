# Build Instructions for Amn Shield Firefox Extension

## Prerequisites

- Node.js 16+ or later
- npm (comes with Node.js)

## Build Steps

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Build Firefox package:**

   ```bash
   node scripts/build-firefox.js
   ```

3. **Output locations:**
   - Build directory: `build/firefox/`
   - Distribution package: `dist/amn-shield-v0.1.2-Firefox.zip`

## Build Process Details

### File Processing

The build script performs the following operations:

1. **Copies core extension files** from root to `build/firefox/`:
   - `manifest-v2.json` (renamed to `manifest.json`)
   - `background-v2.js` (renamed to `background.js`)
   - All content scripts, HTML files, CSS, and JavaScript files

2. **Copies assets:**
   - `/images` folder with all icons and graphics
   - `/DeenTab` folder with Islamic new tab page
   - `/services` folder with prayer times and wellness features
   - `/data` folder with blocklists

3. **Processes large blocklist file:**
   - The original `data/blocklists/adult-domains.json` (15.88 MB, 720,770 domains) exceeds Firefox's 5MB file parsing limit
   - **Note:** The source code includes the original large file, but it's NOT included in the final build
   - The split files (`adult-domains-part1.json` through `adult-domains-part4.json`) are already present in the source
   - Build script automatically removes the large file from `build/firefox/data/blocklists/`

4. **Creates distribution package:**
   - Zips the `build/firefox/` directory
   - Outputs to `dist/amn-shield-v0.1.2-Firefox.zip` (~4.90 MB)

### Runtime Loading

- `background.js` loads all 4 blocklist parts sequentially at extension startup
- Each part contains ~180,000 domains
- Total: 720,770 adult content domains blocked

## Verification

After building, verify:

- Package size is under 5MB
- `build/firefox/data/blocklists/` contains only split files (part1-4) and `social-domains.json`
- No `adult-domains.json` file in the build directory

## Dependencies

From `package.json`:

- `archiver`: ^5.3.1 - Creates ZIP archives for distribution

No runtime dependencies or external libraries are bundled in the extension.

## Clean Build

To rebuild from scratch:

```bash
# Remove existing build and dist folders
rm -rf build/firefox dist/amn-shield-v*.zip

# Run build
node scripts/build-firefox.js
```

## Notes for Reviewers

- All JavaScript code is unminified and readable
- No obfuscation or code generation is used
- The build process only copies and organizes files
- Split blocklist files are pre-generated and included in source code
- The extension uses standard WebExtensions APIs (Manifest V2 for Firefox)
