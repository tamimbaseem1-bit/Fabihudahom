// Supabase Edge Function: sheet-proxy
// يعمل كبروكسي خاص لجلب CSV من Google Sheets ويتجاوز مشكلة CORS نهائياً
// لأن الطلب يُرسَل من خادم Supabase نفسه، لا من متصفح المستخدم.

const SHEET_EXPORT_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSPzPi4OtZkWtbi5HlxSbCn5mS8fZGgog6_6mqcLn8B4VqUaoMeVCbANUDIxO0mOiIdr8OVbCV9gNGv/pub?output=csv";

Deno.serve(async (req) => {
  // السماح بطلبات CORS من أي نطاق (موقعك)
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };

  // معالجة preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const res = await fetch(SHEET_EXPORT_URL, {
      headers: {
        // محاكاة طلب متصفح عادي يساعد أحياناً في تجاوز رفض جوجل للطلبات الآلية
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: `Google rejected the request: HTTP ${res.status}` }),
        {
          status: res.status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const csvText = await res.text();

    return new Response(csvText, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "text/csv; charset=utf-8",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});