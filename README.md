# MCP Marketplace - Next.js

A simple marketplace frontend for hosted MCP servers that work with Poke.

## 🚀 Quick Start

```bash
cd nextjs-marketplace
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the marketplace.

## 🎯 What This Does

- **Displays 3 MCP servers**: Hacker News, Weather, GitHub
- **Shows server status**: Live, Deploying, or Offline
- **Copy-to-clipboard**: Easy URL copying for Poke
- **Instructions**: Step-by-step guide for Poke integration
- **Clean UI**: Modern design with Tailwind CSS

## 🔧 MCP Servers

Each MCP server is deployed separately on Render:

- **Hacker News**: `https://hackernews-mcp.onrender.com/mcp`
- **Weather**: `https://weather-mcp.onrender.com/mcp`  
- **GitHub**: `https://github-mcp.onrender.com/mcp`

## 🎨 Features

- ✅ **Responsive design** - Works on mobile and desktop
- ✅ **Copy-to-clipboard** - One-click URL copying
- ✅ **Status indicators** - Live/deploying/offline status
- ✅ **Tool capabilities** - Shows available MCP tools
- ✅ **Poke instructions** - Clear integration guide
- ✅ **Modern UI** - Clean, professional design

## 🚀 Deployment

Deploy to Vercel, Netlify, or any static hosting:

```bash
npm run build
```

The built files will be in the `out` directory.

## 📝 Customization

To add more MCP servers, edit `app/page.tsx` and add to the `mcpServers` array:

```typescript
{
  id: 'new-server',
  name: 'New Server',
  description: 'Description here',
  icon: '🔧',
  capabilities: ['tool1', 'tool2'],
  url: 'https://new-server.onrender.com/mcp',
  status: 'live'
}
```

## 🎯 For Poke Integration

1. Copy any MCP URL from the marketplace
2. Go to [poke.com/settings/connections](https://poke.com/settings/connections)
3. Add the MCP URL with a descriptive name
4. Test with: "Tell the subagent to use the [name] integration's [tool] tool"
