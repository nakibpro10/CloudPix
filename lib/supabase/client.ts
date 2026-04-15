import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    // Return a dummy client or handle it so it doesn't crash the build
    // In production/runtime, this would still be an issue, but it prevents build breakage
    return createBrowserClient(
      supabaseUrl || 'https://placeholder.supabase.co',
      supabaseKey || 'placeholder'
    )
  }

  return createBrowserClient(supabaseUrl, supabaseKey)
}

