# Chat Context Files

This folder contains saved chat conversations and context for future AI assistance sessions.

## File Organization

### Conversation Exports
- `conversation-YYYY-MM-DD-topic.md` - Full conversation exports
- `code-review-YYYY-MM-DD.md` - Code review sessions
- `debugging-YYYY-MM-DD-issue.md` - Debugging sessions

### Context Templates
- `project-overview.md` - Current project state and goals
- `coding-standards.md` - Preferred coding patterns and standards
- `known-issues.md` - Ongoing issues and their context

## Usage in Cursor

1. **Reference in chat**: Use `@filename.md` to include as context
2. **Attach files**: Use the paperclip icon to attach multiple context files
3. **Mention patterns**: Reference specific sections with line numbers

## Best Practices

- Include relevant code snippets in context files
- Add timestamps and specific goals for each session
- Keep context files focused and organized by topic
- Regular cleanup of outdated context files 