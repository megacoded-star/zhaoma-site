import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://qpkxivmegdctihymwjue.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_RFGRxqr7VAoiFgWvIu09gA_4jRFEbm8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);


