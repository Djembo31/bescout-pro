'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Anmeldung fehlgeschlagen. Überprüfen Sie E-Mail und Passwort.')
      setLoading(false)
    } else {
      router.push('/dashboard')
      router.refresh() 
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-background-light rounded-2xl shadow-xl">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">BeScout</h1>
            <p className="text-primary-dark">Willkommen zurück</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
            <div>
                <label className="block mb-2 text-sm font-medium text-primary-dark">Email</label>
                <input 
                    type="email"
                    name="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="w-full px-4 py-2 border rounded-lg bg-background border-border text-primary focus:outline-none focus:ring-2 focus:ring-accent transition"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-primary-dark">Password</label>
                <input 
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    className="w-full px-4 py-2 border rounded-lg bg-background border-border text-primary focus:outline-none focus:ring-2 focus:ring-accent transition"
                />
            </div>
            <button 
                type="submit"
                disabled={loading}
                className="w-full px-4 py-3 font-bold text-white bg-accent rounded-lg hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-light disabled:opacity-50 transition-all">
                {loading ? 'Melde an...' : 'Einloggen'}
            </button>
            {error && <p className="text-sm text-center text-danger">{error}</p>}
        </form>
      </div>
    </div>
  )
} 