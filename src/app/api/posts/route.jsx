import axios from 'axios';

export async function POST(request) {
  const { text, token } = await request.json();

  try {
    const response = await axios.post('https://arbazmurme.onrender.com/api/posts', { text }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return new Response(JSON.stringify(response.data), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Post creation failed' }), { status: 400 });
  }
}
