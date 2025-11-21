export default async (req) => {
  let body = null;

  try {
    const raw = await req.text();
    body = raw ? JSON.parse(raw) : null;
  } catch (e) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "JSON inválido",
        detalle: e.toString()
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  return new Response(
    JSON.stringify({
      ok: true,
      recibido: body,
      method: req.method
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};
