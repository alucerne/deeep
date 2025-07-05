import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
  try {
    const { email, initial_credits } = await req.json();

    if (!email || typeof initial_credits !== "number") {
      return new Response(JSON.stringify({ error: "Missing or invalid input." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const response = await fetch("https://al-api.proxy4smtp.com/audlabserviceusers/newuser", {
      method: "POST",
      headers: {
        "Authorization": "Bearer audlabY4qjL)129",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, initial_credits })
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Unexpected error", details: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
});

