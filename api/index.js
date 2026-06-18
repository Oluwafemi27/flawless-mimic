let serverHandler;

async function getServerHandler() {
  if (!serverHandler) {
    const module = await import('../dist/server/server.js');
    serverHandler = module.default;
  }
  return serverHandler;
}

export default async function handler(req, res) {
  try {
    const handler = await getServerHandler();

    const url = new URL(req.url, `http://${req.headers.host}`);
    const request = new Request(url, {
      method: req.method,
      headers: Object.entries(req.headers).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}),
      body: ['GET', 'HEAD'].includes(req.method) ? null : JSON.stringify(req.body || {}),
    });

    const response = await handler.fetch(request, {}, {});

    res.status(response.status);

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }
}
