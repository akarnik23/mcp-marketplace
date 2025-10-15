# MCP Marketplace

A simple marketplace frontend for hosted MCP servers that work with Poke.

## 🚀 Quick Start

```bash
cd nextjs-marketplace
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the marketplace.

## 🎯 What This Does

- **Displays 6 MCP servers**: Hacker News, Weather, GitHub, Reddit, Spotify, News
- **Shows server status**: Live, Deploying, or Offline
- **Copy-to-clipboard**: Easy URL copying for Poke
- **Instructions**: Step-by-step guide for Poke integration
- **Clean UI**: Modern design with Tailwind CSS

## 🔧 MCP Servers

Each MCP server is deployed separately on Render:

- **Hacker News**: `https://hackernews-mcp.onrender.com/mcp` | [GitHub](https://github.com/akarnik23/mcp-hackernews)
- **Weather**: `https://weather-mcp-mqrh.onrender.com/mcp` | [GitHub](https://github.com/akarnik23/mcp-weather)
- **GitHub**: `https://github-mcp-lgfb.onrender.com/mcp` | [GitHub](https://github.com/akarnik23/mcp-github)
- **Reddit**: `https://reddit-mcp-7ms2.onrender.com/mcp` | [GitHub](https://github.com/akarnik23/mcp-reddit)
- **Spotify**: `https://spotify-mcp-092h.onrender.com/mcp` | [GitHub](https://github.com/akarnik23/mcp-spotify)
- **News**: `https://news-mcp-xd6i.onrender.com/mcp` | [GitHub](https://github.com/akarnik23/mcp-news)

## 🎨 Features

- ✅ **Responsive design** - Works on mobile and desktop
- ✅ **Copy-to-clipboard** - One-click URL copying
- ✅ **Status indicators** - Live/deploying/offline status
- ✅ **Tool capabilities** - Shows available MCP tools
- ✅ **Poke instructions** - Clear integration guide
- ✅ **Modern UI** - Clean, professional design

## 🚀 Deployment

### MCP Servers (Render.com)

Each MCP server can be deployed separately on Render.com:

#### 1. GitHub MCP Server

**Prerequisites:**
- GitHub account
- GitHub Personal Access Token # Otherwise will show demo data for default tool calls

**Steps:**
1. Go to [render.com](https://render.com) and sign up/login with GitHub
2. Click "New +" → "Web Service"
3. Connect your GitHub repository containing the MCP server
4. Configure the service:
   - **Name**: `github-mcp` (or your preferred name)
   - **Environment**: `Python 3`
   - **Plan**: `Free`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python src/server.py`
   - **Auto-Deploy**: `No` (recommended for free tier)

5. **Set Environment Variables:**
   - `PORT`: `8000`
   - `GITHUB_TOKEN`: Your GitHub Personal Access Token

**Creating a GitHub Personal Access Token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `read:user`, `read:org`
4. Copy the token and paste it as the `GITHUB_TOKEN` value in Render

#### 2. Weather MCP Server

**Prerequisites:**
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api)) # Otherwise will show demo data

**Steps:**
1. Create a new Web Service on Render
2. Configure the service:
   - **Name**: `weather-mcp`
   - **Environment**: `Python 3`
   - **Plan**: `Free`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python src/server.py`

3. **Set Environment Variables:**
   - `PORT`: `8000`
   - `WEATHER_API_KEY`: Your OpenWeatherMap API key

**Getting OpenWeatherMap API Key:**
1. Sign up at [openweathermap.org](https://openweathermap.org/api)
2. Go to API keys section
3. Copy your API key and use it as `WEATHER_API_KEY` in Render

#### 3. Hacker News MCP Server

**Steps:**
1. Create a new Web Service on Render
2. Configure the service:
   - **Name**: `hackernews-mcp`
   - **Environment**: `Python 3`
   - **Plan**: `Free`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python src/server.py`

3. **Set Environment Variables:**
   - `PORT`: `8000`
   - (No additional API keys required - uses public Hacker News API)

#### 4. Reddit MCP Server

**Prerequisites:**
- Reddit account
- Reddit API credentials (free)

**Steps:**
1. Create a new Web Service on Render
2. Configure the service:
   - **Name**: `reddit-mcp`
   - **Environment**: `Python 3`
   - **Plan**: `Free`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python src/server.py`

3. **Set Environment Variables:**
   - `PORT`: `8000`
   - `REDDIT_CLIENT_ID`: Your Reddit app client ID
   - `REDDIT_CLIENT_SECRET`: Your Reddit app client secret

**Getting Reddit API Credentials:**
1. Go to [Reddit App Preferences](https://www.reddit.com/prefs/apps)
2. Click "Create App" or "Create Another App"
3. Fill in the form:
   - **Name**: `pokeMCPMarket`
   - **App Type**: `script` (Script for personal use)
   - **Description**: `MCP server for accessing Reddit data through Poke marketplace integration`
   - **About URL**: `https://github.com/yourusername/mcp-reddit`
   - **Redirect URI**: `http://localhost:8080`
4. Click "Create app"
5. Copy your `client_id` and `client_secret`
6. Add them to Render environment variables as shown above

#### 5. Spotify MCP Server

**Prerequisites:**
- Spotify account
- Spotify API credentials (free at [developer.spotify.com](https://developer.spotify.com/dashboard))

**Steps:**
1. Create a new Web Service on Render
2. Configure the service:
   - **Name**: `spotify-mcp`
   - **Environment**: `Python 3`
   - **Plan**: `Free`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python src/server.py`

3. **Set Environment Variables:**
   - `PORT`: `8000`
   - `SPOTIFY_CLIENT_ID`: Your Spotify app client ID
   - `SPOTIFY_CLIENT_SECRET`: Your Spotify app client secret

**Getting Spotify API Credentials:**
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click "Create App"
4. Fill in the app details:
   - **App name**: `Your MCP Server` (or any name you prefer)
   - **App description**: `MCP server for Spotify integration`
   - **Website**: `https://spotify-mcp.onrender.com` (use your deployed URL)
   - **Redirect URI**: `https://spotify-mcp.onrender.com` (use your deployed URL)
5. **Select "Web API"** when asked about APIs/SDKs
6. Click "Save"
7. Copy your `Client ID` and `Client Secret`
8. Add them to Render environment variables as shown above

**Note:** Use your deployed Render URL (not localhost) for the redirect URI since Spotify requires HTTPS for security.

#### 6. Deploy the Frontend

**Important:** If you added API keys (GitHub token, Weather API key, Reddit credentials), be careful about sharing your deployed frontend publicly as it will contain your MCP server URLs.

Update the MCP server URLs in `app/page.tsx` with your deployed Render URLs:

```typescript
const mcpServers = [
  {
    id: 'hackernews',
    name: 'Hacker News',
    description: 'Browse and search Hacker News stories',
    icon: '/hackerNews.png',
    capabilities: ['get_top_stories', 'get_story', 'get_new_stories'],
    url: 'https://your-hackernews-mcp.onrender.com/mcp', // Update this
    status: 'live'
  },
  {
    id: 'weather',
    name: 'Weather',
    description: 'Get current weather and forecasts for any location worldwide',
    icon: '/weather.png',
    capabilities: ['get_current_weather', 'get_forecast'],
    url: 'https://your-weather-mcp.onrender.com/mcp', // Update this
    status: 'live'
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Access GitHub repositories, issues, pull requests, and more',
    icon: '/github.png',
    capabilities: ['get_repos', 'get_issues', 'get_pull_requests', 'search_code'],
    url: 'https://your-github-mcp.onrender.com/mcp', // Update this
    status: 'live'
  },
  {
    id: 'reddit',
    name: 'Reddit',
    description: 'Access Reddit posts, search, and user content from any subreddit',
    icon: '/reddit.png',
    capabilities: ['get_subreddit_posts', 'search_reddit', 'get_user_posts'],
    url: 'https://your-reddit-mcp.onrender.com/mcp', // Update this
    status: 'live'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Search tracks, artists, and get top tracks from any artist',
    icon: '/spotify.png',
    capabilities: ['search_tracks', 'search_artists', 'get_artist_top_tracks'],
    url: 'https://your-spotify-mcp.onrender.com/mcp', // Update this
    status: 'live'
  }
];
```

Then deploy the frontend to Vercel, Netlify, or your preferred hosting platform.

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub** (if you haven't already)
2. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub
3. **Click "New Project"**
4. **Import your repository** containing the mcp marketplace
5. **Configure the project:**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `nextjs-marketplace` (if your repo has multiple folders)
   - **Build Command**: `next build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. **Click "Deploy"**
7. **Your marketplace will be live** at `https://your-project-name.vercel.app`

**Note:** Vercel automatically deploys when you push changes to your main branch.

## 🔧 Adding Environment Variables on Render

For each MCP server that requires API keys, you need to add environment variables in Render:

1. **Go to your Render service dashboard**
2. **Click on the "Environment" tab**
3. **Add the required environment variables:**
   - For **GitHub MCP**: `GITHUB_TOKEN` = `your_github_token`
   - For **Weather MCP**: `WEATHER_API_KEY` = `your_openweathermap_key`
   - For **Reddit MCP**: `REDDIT_CLIENT_ID` = `your_reddit_client_id` and `REDDIT_CLIENT_SECRET` = `your_reddit_client_secret`
   - For **Spotify MCP**: `SPOTIFY_CLIENT_ID` = `your_spotify_client_id` and `SPOTIFY_CLIENT_SECRET` = `your_spotify_client_secret`
4. **Click "Save Changes"**
5. **Redeploy** your service (Render will automatically redeploy when you save environment variables)

**Note:** Hacker News MCP doesn't require any environment variables as it uses the public API.

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
