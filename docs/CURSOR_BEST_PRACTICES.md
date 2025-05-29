# Cursor Best Practices and Development Guidelines

## Table of Contents
- [Development Environment](#development-environment)
- [Project Setup](#project-setup)
- [Common Pitfalls](#common-pitfalls)
- [Workflow Guidelines](#workflow-guidelines)
- [Testing Strategy](#testing-strategy)
- [Documentation Standards](#documentation-standards)

## Development Environment

### Version Management
```bash
# Required versions
Node.js: ^18.17.0
Next.js: ^14.0.0
React: ^18.0.0
TypeScript: ^5.0.0
```

### PowerShell-Specific Rules
- Use semicolon (`;`) for command chaining, NOT `&&`
- Example: `cd project-dir; npm install`
- Always use explicit paths when dealing with spaces
- Use `-Force` flag when necessary for permissions

## Project Setup

### 1. Initial Configuration
```bash
# 1. Create Next.js project
npx create-next-app@latest my-app --typescript --tailwind --eslint

# 2. Port Configuration (next.config.js)
{
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:${PORT}/:path*',
      },
    ];
  },
}
```

### 2. Dependencies Structure
```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "typescript": "^5",
    "tailwindcss": "^3.4",
    "@tailwindcss/forms": "^0.5",
    "@tailwindcss/typography": "^0.5"
  }
}
```

## Common Pitfalls

### 1. PowerShell Command Issues
❌ WRONG:
```powershell
cd my-app && npm install
```

✅ CORRECT:
```powershell
cd my-app; npm install
```

### 2. Port Conflicts
```javascript
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: \`http://localhost:\${process.env.API_PORT || 3001}/:path*\`,
      },
    ];
  },
}
```

### 3. Testing Setup
Start with simple tests before complex configurations:
1. Visual testing
2. Component testing
3. Integration testing
4. E2E testing

## Workflow Guidelines

### 1. Project Structure
```
my-app/
├── app/
│   ├── components/
│   ├── lib/
│   ├── styles/
│   └── tests/
├── docs/
├── public/
└── config/
```

### 2. Development Checklist
- [ ] Base configuration
  - [ ] next.config.js
  - [ ] tailwind.config.js
  - [ ] tsconfig.json
- [ ] Dependencies
  - [ ] Production dependencies
  - [ ] Development dependencies
  - [ ] Type definitions
- [ ] Component Development
  - [ ] Component structure
  - [ ] Styling
  - [ ] Testing
- [ ] Documentation
  - [ ] Component documentation
  - [ ] API documentation
  - [ ] Usage examples

## Testing Strategy

### 1. Visual Testing
```typescript
// Simple component test
'use client';

export default function TestComponent() {
  return (
    <div className="test-container">
      {/* Test content */}
    </div>
  );
}
```

### 2. Component Testing
```typescript
// When needed, use Jest
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    // Add assertions
  });
});
```

## Documentation Standards

### 1. Component Documentation
```typescript
/**
 * @component ComponentName
 * @description Brief description of the component
 * 
 * @example
 * <ComponentName prop="value" />
 * 
 * @props {PropType} propName - Description of prop
 */
```

### 2. Configuration Documentation
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Document each configuration option
  reactStrictMode: true,
  // Add explanatory comments for non-obvious settings
};
```

### 3. Style Documentation
```css
/* Use consistent commenting for Tailwind classes */
className="
  /* Layout */
  flex flex-col
  /* Spacing */
  p-4 gap-2
  /* Visual */
  bg-white rounded-lg
  /* Interactive */
  hover:shadow-lg
"
```

## Best Practices Checklist

### Before Starting Development
1. ✅ Verify all required versions
2. ✅ Set up base configuration
3. ✅ Document dependencies
4. ✅ Plan component structure

### During Development
1. ✅ Follow PowerShell syntax rules
2. ✅ Use proper error handling
3. ✅ Document as you code
4. ✅ Test incrementally

### Before Deployment
1. ✅ Check all configurations
2. ✅ Verify documentation
3. ✅ Run all tests
4. ✅ Review error handling

## Maintenance

### Regular Updates
- Check for dependency updates monthly
- Review and update documentation
- Audit and clean up unused code
- Update best practices based on new learnings

### Troubleshooting Guide
1. Port conflicts: Check process list and kill unused processes
2. PowerShell issues: Use correct syntax and check permissions
3. Next.js errors: Clear `.next` cache and node_modules
4. Tailwind issues: Rebuild CSS and check configuration

---

*Last updated: [Current Date]*
*Version: 1.0.0* 