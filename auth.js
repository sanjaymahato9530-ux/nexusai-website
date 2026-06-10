// REPLACE THESE WITH YOUR SUPABASE PROJECT SETTINGS
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_KEY = 'your-anon-public-key';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Auth Handler
async function handleAuth(type, email, password) {
    if (type === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert('Check your email for confirmation!');
    } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        window.location.href = 'dashboard.html';
    }
}
