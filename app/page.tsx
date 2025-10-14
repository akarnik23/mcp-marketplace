'use client'

import { useState } from 'react'
import { Copy, CheckCircle, ExternalLink, Zap, Wrench } from 'lucide-react'

interface MCPServer {
  id: string
  name: string
  description: string
  icon: string
  capabilities: string[]
  url: string
  status: 'live' | 'deploying' | 'offline'
  githubRepo: string
}

const mcpServers: MCPServer[] = [
  {
    id: 'hackernews',
    name: 'Hacker News',
    description: 'Access top stories, new stories, and story details from Hacker News',
    icon: '/hackerNews.png',
    capabilities: ['get_top_stories', 'get_story', 'get_new_stories'],
    url: 'https://hackernews-mcp.onrender.com/',
    status: 'live',
    githubRepo: 'https://github.com/akarnik23/hackernews-mcp'
  },
  {
    id: 'weather',
    name: 'Weather',
    description: 'Get current weather and forecasts for any location worldwide',
    icon: '/weather.png',
    capabilities: ['get_current_weather', 'get_forecast'],
    url: 'https://weather-mcp-mqrh.onrender.com',
    status: 'live',
    githubRepo: 'https://github.com/akarnik23/weather-mcp'
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Access GitHub repositories, issues, pull requests, and more',
    icon: '/github.png',
    capabilities: ['get_repos', 'get_issues', 'get_pull_requests', 'search_code'],
    url: 'https://github-mcp-lgfb.onrender.com/',
    status: 'live',
    githubRepo: 'https://github.com/akarnik23/github-mcp'
  }
]

export default function Home() {
  const [copiedUrl, setCopiedUrl] = useState<string>('')

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedUrl(url)
    setTimeout(() => setCopiedUrl(''), 2000)
  }

  const addToPoke = (url: string) => {
    // Copy the MCP URL for convenience and open Poke settings in a new tab
    copyToClipboard(url)
    window.open('https://poke.com/settings/connections', '_blank', 'noopener,noreferrer')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-emerald-900/30 text-emerald-300 border border-emerald-700'
      case 'deploying':
        return 'bg-yellow-900/30 text-yellow-300 border border-yellow-700'
      case 'offline':
        return 'bg-red-900/30 text-red-300 border border-red-700'
      default:
        return 'bg-slate-800 text-slate-200 border border-slate-700'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'Live'
      case 'deploying':
        return 'Deploying'
      case 'offline':
        return 'Offline'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(to bottom, #203a54, #000000)' }}>
      {/* Header */}
      <header className="backdrop-blur border-b" style={{ background: 'rgba(32,58,84,0.7)', borderColor: '#718392' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl p-2" style={{ background: '#203a54', border: '1px solid #718392' }}>
                <img src="/interaction-palm.png" alt="Interaction palm" className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">MCP Marketplace</h1>
                <p className="mt-1" style={{ color: '#718392' }}>Hosted integrations for Poke — no local setup</p>
              </div>
            </div>
            <a
              href="https://interaction.co/about"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-90"
              style={{ background: '#203a54', color: '#ffffff', border: '1px solid #718392' }}
              title="About The Interaction Company"
            >
              <Zap className="w-4 h-4" />
              <span>Interaction</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* MCP Servers Grid */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Available MCP Servers</h2>
            <p style={{ color: '#718392' }}>Click “Add to Poke” to copy the endpoint and open Poke settings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mcpServers.map((server) => (
              <div key={server.id} className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" style={{ background: '#203a54', border: '1px solid #718392' }}>
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const isImage = typeof server.icon === 'string' && (server.icon.startsWith('/') || server.icon.startsWith('http'))
                        return isImage ? (
                          <img src={server.icon} alt="icon" className="w-9 h-9 rounded-md" />
                        ) : (
                          <div className="text-4xl" aria-hidden>{server.icon}</div>
                        )
                      })()}
                      <div>
                        <h3 className="text-xl font-bold text-white">{server.name}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(server.status)}`}>
                          {getStatusText(server.status)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-4 min-h-[3rem]" style={{ color: '#ffffff' }}>{server.description}</p>

                  {/* Capabilities */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="w-4 h-4" style={{ color: '#718392' }} />
                      <span className="text-sm font-medium text-white">Available Tools:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {server.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="px-2 py-1 text-xs rounded-md font-mono"
                          style={{ background: '#000000', color: '#ffffff', border: '1px solid #718392' }}
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* URL Display */}
                  <div className="rounded-md p-3 mb-4" style={{ background: '#000000', border: '1px solid #718392' }}>
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-sm text-white font-mono flex-1 break-all">
                        {server.url}
                      </code>
                      <button
                        onClick={() => copyToClipboard(server.url)}
                        className={`flex-shrink-0 p-2 rounded-md transition-all border ${
                          copiedUrl === server.url
                            ? 'bg-[rgba(46,160,67,0.2)] text-[#a7f3d0] border-[rgba(46,160,67,0.5)]'
                            : ''
                        }`}
                        style={copiedUrl === server.url ? undefined : { background: '#203a54', color: '#ffffff', border: '1px solid #718392' }}
                        title="Copy MCP URL"
                      >
                        {copiedUrl === server.url ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Primary CTA: Add to Poke */}
                  <button
                    onClick={() => addToPoke(server.url)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold active:scale-95 transition-all mb-3"
                    style={{ background: '#ffffff', color: '#203a54' }}
                    aria-label="Add this MCP integration to Poke"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Add to Poke
                  </button>

                  {/* Deploy to Render */}
                  <a
                    href={`https://render.com/deploy?repo=${server.githubRepo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm border transition-all hover:opacity-90"
                    style={{ 
                      background: 'transparent', 
                      color: '#718392', 
                      borderColor: '#718392' 
                    }}
                  >
                    <Zap className="w-4 h-4" />
                    Deploy to Render
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Instructions */}
        <section className="bg-slate-900 rounded-2xl shadow-lg border border-slate-800 p-8">
          <h3 className="text-xl font-semibold text-white mb-4">How to Connect to Poke</h3>
          <div className="space-y-4 text-slate-300">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-slate-800 text-slate-200 border border-slate-700 rounded-full flex items-center justify-center font-semibold">1</span>
              <p><strong>Click “Add to Poke”</strong> on any server card</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-slate-800 text-slate-200 border border-slate-700 rounded-full flex items-center justify-center font-semibold">2</span>
              <p><strong>Poke Settings</strong> opens at <a href="https://poke.com/settings/connections" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline inline-flex items-center gap-1">
                poke.com/settings/connections <ExternalLink className="w-4 h-4" />
              </a></p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-slate-800 text-slate-200 border border-slate-700 rounded-full flex items-center justify-center font-semibold">3</span>
              <p><strong>Paste is ready</strong> — the MCP URL is already copied to your clipboard</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-slate-800 text-slate-200 border border-slate-700 rounded-full flex items-center justify-center font-semibold">4</span>
              <p><strong>Test</strong> by asking Poke: “Use the Hacker News integration’s get_top_stories tool.”</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-400">
          <p>Built for The Interaction Company • MCP Marketplace</p>
        </footer>
      </main>
    </div>
  )
}
