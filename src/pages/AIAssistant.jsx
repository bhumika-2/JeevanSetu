import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bot, Send, Mic, Sparkles, MapPinned, Landmark, CalendarHeart, User } from 'lucide-react'
import { chatSeed, aiSuggestedPrompts, aiResponseBank, aiFallback, user } from '../data/mockData.js'
import { useApp, LANGUAGES } from '../context/AppContext.jsx'

const suggestionMeta = {
  'nearby-care': { label: 'Find nearby care', icon: MapPinned, to: '/nearby-care' },
  schemes: { label: 'View matching schemes', icon: Landmark, to: '/schemes' },
  camps: { label: 'See health camps', icon: CalendarHeart, to: '/health-camps' }
}

function craftReply(text) {
  const lower = text.toLowerCase()
  const match = aiResponseBank.find((r) => r.keywords.some((k) => lower.includes(k)))
  return match || { reply: aiFallback, suggestion: null }
}

export default function AIAssistant() {
  const { voiceMode, setVoiceMode, language } = useApp()
  const [messages, setMessages] = useState(chatSeed)
  const [input, setInput] = useState('')
  const [listening, setListening] = useState(false)
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const currentLang = LANGUAGES.find((l) => l.code === language)

  function send(text) {
    const trimmed = text.trim()
    if (!trimmed) return
    const userMsg = { id: crypto.randomUUID(), role: 'user', text: trimmed }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setTyping(true)
    const { reply, suggestion } = craftReply(trimmed)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: 'assistant', text: reply, suggestion }
      ])
    }, 900 + Math.random() * 500)
  }

  function handleMic() {
    if (listening) {
      setListening(false)
      return
    }
    setListening(true)
    setVoiceMode(true)
    // Simulated speech-to-text capture
    setTimeout(() => {
      setListening(false)
      send('I have had a mild fever and headache for 2 days')
    }, 2200)
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-6.5rem)] max-w-4xl flex-col lg:h-[calc(100vh-5rem)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-500 text-white">
            <Bot size={20} />
          </span>
          <div>
            <h1 className="font-display text-lg font-bold text-ink">AI Health Assistant</h1>
            <p className="text-xs text-ink/50">
              Speaking in {currentLang.native} · Not a substitute for a doctor's diagnosis
            </p>
          </div>
        </div>
        <span className="chip">
          <Sparkles size={12} /> Voice-first {voiceMode ? 'enabled' : 'available'}
        </span>
      </div>

      {/* Chat surface */}
      <div className="card flex-1 overflow-y-auto p-4 md:p-6 space-y-4 no-scrollbar">
        {messages.map((m) => (
          <div key={m.id} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <span
              className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                m.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-teal-100 text-teal-700'
              }`}
            >
              {m.role === 'user' ? <User size={15} /> : <Bot size={15} />}
            </span>
            <div className={`max-w-[80%] ${m.role === 'user' ? 'text-right' : ''}`}>
              <div
                className={`inline-block rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-indigo-500 text-white rounded-tr-sm'
                    : 'bg-teal-50 text-ink rounded-tl-sm'
                }`}
              >
                {m.text}
              </div>
              {m.suggestion && suggestionMeta[m.suggestion] && (
                <Link
                  to={suggestionMeta[m.suggestion].to}
                  className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-teal-200 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 hover:bg-teal-50"
                >
                  {React.createElement(suggestionMeta[m.suggestion].icon, { size: 13 })}
                  {suggestionMeta[m.suggestion].label}
                </Link>
              )}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-teal-100 text-teal-700">
              <Bot size={15} />
            </span>
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-teal-50 px-4 py-3">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal-400"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested prompts */}
      {messages.length < 3 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {aiSuggestedPrompts.map((p) => (
            <button
              key={p}
              onClick={() => send(p)}
              className="shrink-0 whitespace-nowrap rounded-full border border-teal-100 bg-white px-3.5 py-2 text-xs font-medium text-ink/65 hover:bg-teal-50"
            >
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Composer */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          send(input)
        }}
        className="mt-3 flex items-center gap-2"
      >
        <button
          type="button"
          onClick={handleMic}
          className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors ${
            listening ? 'bg-red-500 text-white' : 'bg-teal-500 text-white hover:bg-teal-600'
          }`}
          aria-label="Speak"
        >
          {listening && (
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-red-400" />
          )}
          <Mic size={18} className="relative" />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input flex-1"
          placeholder={listening ? 'Listening…' : `Type in ${currentLang.native} or English…`}
          disabled={listening}
        />
        <button type="submit" className="btn-primary shrink-0 px-3.5" disabled={!input.trim()}>
          <Send size={17} />
        </button>
      </form>
      <p className="mt-2 text-center text-[11px] text-ink/35">
        AI-generated guidance for {user.name.split(' ')[0]} · Always consult a certified doctor for diagnosis or treatment.
      </p>
    </div>
  )
}
