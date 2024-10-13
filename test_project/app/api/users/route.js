// app/api/data/route.js

export async function GET(req) {
    const data = { message: 'Hello, world!', data: [1, 2, 3],  };
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  