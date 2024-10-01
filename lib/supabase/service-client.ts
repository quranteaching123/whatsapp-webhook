import { createClient } from "@supabase/supabase-js"

function createServiceClient() {
    return createClient('https://xpoejfumaendasjposol.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwb2VqZnVtYWVuZGFzanBvc29sIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzc3NTY2NywiZXhwIjoyMDQzMzUxNjY3fQ.AJ7Du79RWTxQ0WAQAnos8edyhfhJPXdqT2rbRlRWFCI')
}

export {
    createServiceClient
}
