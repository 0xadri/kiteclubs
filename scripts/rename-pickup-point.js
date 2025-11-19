#!/usr/bin/env node

/**
 * Script to rename 'exactPickupPoint' to 'vaguePickupPoint' in mockTrips.ts
 * 
 * Usage: node scripts/rename-pickup-point.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../src/features/trip-search/mocks/mockTrips.ts');

console.log('🔄 Starting rename operation...');
console.log(`📁 Target file: ${filePath}`);

try {
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');

    // Count occurrences before replacement
    const matches = content.match(/exactPickupPoint/g);
    const occurrenceCount = matches ? matches.length : 0;

    console.log(`📊 Found ${occurrenceCount} occurrences of 'exactPickupPoint'`);

    if (occurrenceCount === 0) {
        console.log('⚠️  No occurrences found. Nothing to replace.');
        process.exit(0);
    }

    // Perform the replacement
    const updatedContent = content.replace(/exactPickupPoint/g, 'vaguePickupPoint');

    // Write back to file
    fs.writeFileSync(filePath, updatedContent, 'utf8');

    console.log('✅ Successfully renamed all occurrences!');
    console.log(`📝 Updated ${occurrenceCount} instances of 'exactPickupPoint' to 'vaguePickupPoint'`);
    console.log('');
    console.log('⚠️  IMPORTANT: You may also need to update:');
    console.log('   - Type definitions (Trip interface)');
    console.log('   - Components that use this property');
    console.log('   - Any other files referencing exactPickupPoint');

} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}
