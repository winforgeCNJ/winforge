import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend('re_fy7wEKL4_9abQyrgTFnznEV3eyonyV1MY'); // API KEY with info@winforge.com.ar

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    const name = data.get('name');
    const lastName = data.get('lastName');
    const mail = data.get('mail');
    const message = data.get('message');

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'matiasc.02.2003@gmail.com', // info@winforge.com.ar
      subject: `Mensaje desde web - ${name} ${lastName} - ${mail}`,
      html: `<p>${message}</p>`,
    });

    return new Response(
      JSON.stringify({
        message: 'El correo fue enviado correctamente.',
        status: 200,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Ocurrio un error en el servidor.',
        error,
        status: 500,
      })
    );
  }
};
