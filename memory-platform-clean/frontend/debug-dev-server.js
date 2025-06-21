#!/usr/bin/env node
/**
 * Enhanced Development Server with Debugging
 * Provides detailed logging and error tracking for Memory Orchestration Platform
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Memory Platform Debug Development Server');
console.log('==========================================');
console.log(`📅 Started at: ${new Date().toISOString()}`);
console.log(`📁 Working directory: ${process.cwd()}`);
console.log(`🔧 Node version: ${process.version}`);
console.log('');

// Check critical files
console.log('📋 Pre-flight checks:');
const criticalFiles = [
  'package.json',
  'tsconfig.json',
  'src/lib/utils.ts',
  'src/app/page.tsx',
  'src/components/memory/memory-dashboard.tsx',
  'src/app/layout.tsx'
];

let allFilesExist = true;
criticalFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

if (!allFilesExist) {
  console.log('');
  console.log('🚨 CRITICAL FILES MISSING! Cannot start development server.');
  process.exit(1);
}

// Check package.json content
console.log('');
console.log('📦 Package information:');
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`   Name: ${pkg.name}`);
  console.log(`   Version: ${pkg.version}`);
  console.log(`   Next.js: ${pkg.dependencies?.next || 'Not found'}`);
  console.log(`   React: ${pkg.dependencies?.react || 'Not found'}`);
} catch (error) {
  console.log(`❌ Error reading package.json: ${error.message}`);
}

// Check TypeScript configuration
console.log('');
console.log('🔧 TypeScript configuration:');
try {
  const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
  if (tsConfig.compilerOptions?.paths) {
    console.log('   Path mappings:');
    Object.entries(tsConfig.compilerOptions.paths).forEach(([key, value]) => {
      console.log(`     ${key} -> ${Array.isArray(value) ? value.join(', ') : value}`);
    });
  } else {
    console.log('   ⚠️  No path mappings found');
  }
} catch (error) {
  console.log(`❌ Error reading tsconfig.json: ${error.message}`);
}

console.log('');
console.log('🔍 Starting Next.js development server with enhanced logging...');
console.log('');

// Start the development server
const devServer = spawn('npm', ['run', 'dev'], {
  stdio: 'pipe',
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: 'development',
    NEXT_TELEMETRY_DISABLED: '1'
  }
});

let serverStarted = false;
let buildErrors = [];

devServer.stdout.on('data', (data) => {
  const output = data.toString();
  
  // Check for server start
  if (output.includes('Ready in') || output.includes('Local:')) {
    if (!serverStarted) {
      console.log('🎉 Development server started successfully!');
      serverStarted = true;
    }
  }
  
  // Check for compilation success
  if (output.includes('Compiled successfully')) {
    console.log('✅ Compilation successful');
    buildErrors = []; // Clear previous errors
  }
  
  // Check for compilation errors
  if (output.includes('Failed to compile') || output.includes('Error:')) {
    console.log('❌ Compilation error detected');
  }
  
  // Log all output with timestamp
  const lines = output.trim().split('\n');
  lines.forEach(line => {
    if (line.trim()) {
      console.log(`[${new Date().toTimeString().split(' ')[0]}] ${line}`);
    }
  });
});

devServer.stderr.on('data', (data) => {
  const error = data.toString();
  const lines = error.trim().split('\n');
  
  lines.forEach(line => {
    if (line.trim()) {
      console.log(`[${new Date().toTimeString().split(' ')[0]}] ❌ ERROR: ${line}`);
      buildErrors.push(line);
    }
  });
  
  // Analyze common errors
  if (error.includes("Cannot find module '@/lib/utils'")) {
    console.log('');
    console.log('🔧 UTILS MODULE ERROR DETECTED:');
    console.log('   This suggests a path mapping issue.');
    console.log('   Checking utils.ts file...');
    
    const utilsPath = 'src/lib/utils.ts';
    if (fs.existsSync(utilsPath)) {
      console.log(`   ✅ ${utilsPath} exists`);
      try {
        const utilsContent = fs.readFileSync(utilsPath, 'utf8');
        console.log(`   📄 Content preview: ${utilsContent.substring(0, 100)}...`);
      } catch (err) {
        console.log(`   ❌ Error reading utils.ts: ${err.message}`);
      }
    } else {
      console.log(`   ❌ ${utilsPath} does not exist!`);
    }
    console.log('');
  }
});

devServer.on('close', (code) => {
  console.log('');
  console.log(`🔚 Development server exited with code ${code}`);
  
  if (buildErrors.length > 0) {
    console.log('');
    console.log('📋 Error Summary:');
    buildErrors.forEach((error, index) => {
      console.log(`   ${index + 1}. ${error}`);
    });
  }
  
  console.log(`📅 Session ended at: ${new Date().toISOString()}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('');
  console.log('🛑 Shutting down development server...');
  devServer.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('');
  console.log('🛑 Terminating development server...');
  devServer.kill('SIGTERM');
}); 