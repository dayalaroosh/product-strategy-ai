# Cursor Settings Guide

## Overview
This guide explains how to apply and use the custom settings for Cursor IDE to enforce our development best practices.

## How to Apply Settings

1. Open Cursor Settings:
   - Windows/Linux: `Ctrl + ,`
   - macOS: `Cmd + ,`

2. Navigate to User Settings:
   - Click on "User" tab
   - Select "Edit in settings.json"

3. Copy the contents from `.cursor/settings.json` into your settings file

## Key Features

### 1. Editor Settings
- Auto-formatting on save
- ESLint fixes on save
- 2-space indentation
- 80/100 character rulers for code width guidance

### 2. PowerShell Configuration
- Default terminal set to PowerShell
- Proper command chaining syntax (`;` instead of `&&`)
- Special handling for paths with spaces

### 3. Custom Snippets
- `ncomp`: Creates a new Next.js component
- `pscmd`: Creates PowerShell commands with proper syntax

### 4. Workflow Rules
The settings enforce our development workflow:
1. Project Setup
2. Component Development
3. Testing Strategy
4. Documentation Requirements

### 5. Error Handling Patterns
Prioritized checks for common issues:
1. Port conflicts
2. PowerShell syntax
3. Next.js configuration
4. Tailwind setup

## Using the Settings

### Custom Commands
```json
project.setup: Creates a new Next.js project
project.dev: Starts development server
project.build: Builds the project
project.test: Runs tests
```

### Workflow Enforcement
The settings will help enforce:
- Proper file organization
- Consistent coding style
- Documentation requirements
- Testing priorities

## Troubleshooting

### Common Issues
1. Settings not applying:
   - Restart Cursor
   - Check JSON syntax
   - Verify file location

2. PowerShell commands not working:
   - Check execution policy
   - Verify PowerShell version
   - Use proper path syntax

3. Snippets not working:
   - Verify file type matches snippet scope
   - Check snippet prefix
   - Restart language server

## Maintenance

### Updating Settings
1. Review settings monthly
2. Update version requirements
3. Add new best practices
4. Remove deprecated settings

### Version Control
- Keep settings in version control
- Document changes in commit messages
- Update team documentation

## Best Practices

1. Always use the provided snippets
2. Follow the workflow rules
3. Document any custom settings
4. Share improvements with the team

## Additional Resources

- [Cursor Documentation](https://cursor.sh/docs)
- [PowerShell Guide](../guides/powershell-commands.md)
- [Project Setup Guide](../guides/project-setup.md)

---

*Last updated: [Current Date]* 