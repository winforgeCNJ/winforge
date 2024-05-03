export async function sendMail(data: FormData) {
  const config = {
    method: 'POST',
    body: data,
  };

  const response = await fetch('/api/mail', config);
  const result = await response.json();
  return result;
}
