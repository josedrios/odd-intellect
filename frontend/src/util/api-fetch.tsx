export async function apiFetch<T>(
  path: string,
  options: RequestInit,
): Promise<T> {
  const baseUrl = 'http://localhost:4000/api';
  const res = await fetch(baseUrl + path, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!res.ok) {
    console.log(res);
    const message = await res.text();
    throw new Error(message || 'request failed');
  }
  return res.json() as Promise<T>;
}
