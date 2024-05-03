import { sendMail } from './utils/send-mail';
import SuccessForm from './success-form';
import { useState } from 'react';

export default function Form() {
  const [status, setStatus] = useState({
    isLoading: false,
    isSuccess: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevValues) => ({
      ...prevValues,
      isLoading: true,
    }));
    const formData = new FormData(e.target as HTMLFormElement);
    const result = await sendMail(formData);

    if (result.status === 200) {
      setStatus((prevValues) => ({
        ...prevValues,
        isSuccess: true,
      }));
    }

    setStatus((prevValues) => ({
      ...prevValues,
      isLoading: false,
    }));
  };

  if (status.isSuccess) return <SuccessForm />;

  return (
    <section className="lg:min-w-[40rem]  ">
      <h2 className="h2 font-bold text-white mb-1 lg:mb-0 uppercase ">
        Contactanos
      </h2>
      <p className="text-xl text-white mb-4">Para saber más de WinForge</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-6 items-start w-full text-white relative"
      >
        <div className="flex items-center gap-x-4 w-full">
          <input
            type="text"
            required
            placeholder="NOMBRE"
            className="border-white border-2 bg-transparent rounded-2xl px-4 w-full py-4 outline-none focus:border-4 focus:border-primary"
            name="name"
          />
          <input
            type="text"
            required
            placeholder="APELLIDO"
            className="border-white border-2 bg-transparent rounded-2xl px-4 w-full py-4 outline-none focus:border-4 focus:border-primary"
            name="lastName"
          />
        </div>
        <input
          type="email"
          required
          placeholder="MAIL"
          className="border-white border-2 bg-transparent rounded-2xl px-4 w-full py-4 outline-none focus:border-4 focus:border-primary"
          name="mail"
        />
        <textarea
          placeholder="TU MENSAJE"
          required
          name="message"
          className="border-white border-2 bg-transparent rounded-2xl px-4 w-full py-4 outline-none focus:border-4 resize-none h-44 focus:border-primary"
        />
        <button
          type="submit"
          disabled={status.isLoading}
          className=" bg-white text-black  px-6 rounded-full py-2 font-semibold bg-gradient-to-r  hover:bg-transparent border-2 border-transparent hover:border-white transition-all  hover:text-white self-end hover:scale-[1.03] "
        >
          {status.isLoading ? (
            <svg
              className="spin-animate"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3a9 9 0 1 0 9 9"
              />
            </svg>
          ) : (
            'Enviar'
          )}
        </button>
      </form>
    </section>
  );
}
