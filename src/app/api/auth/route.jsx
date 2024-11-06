import axios from 'axios';

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const response = await axios.post('https://arbazmurme.onrender.com/api/auth/login', {
      email,
      password
    });

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Authentication failed' }), { status: 400 });
  }
}
