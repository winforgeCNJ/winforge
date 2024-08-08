import { sendMail } from "./utils/send-mail";
import SuccessForm from "./success-form";
import { useState } from "react";
import { cn } from "@/lib/cn";

export type InitialValuesT = {
  user_name: string;
  last_name: string;
  email: string;
  message: string;
};

const initialValues: InitialValuesT = {
  user_name: "",
  last_name: "",
  email: "",
  message: "",
};

export default function Form() {
  const [values, setValues] = useState(initialValues);

  const [status, setStatus] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevValues) => ({
      ...prevValues,
      isLoading: true,
    }));
    try {
      const result = await sendMail(values);

      if (result.text !== "OK") {
        setStatus((prevValues) => ({
          ...prevValues,
          isError: true,
        }));
        return;
      }

      setStatus((prevValues) => ({
        ...prevValues,
        isSuccess: true,
      }));
    } catch (error) {
      console.log(error);
      setStatus((prevValues) => ({
        ...prevValues,
        isError: true,
      }));
    } finally {
      setStatus((prevValues) => ({
        ...prevValues,
        isLoading: false,
      }));
    }
  };

  if (status.isSuccess) return <SuccessForm />;

  return (
    <section className="lg:min-w-[40rem]">
      <h2 className="h2 mb-1 font-bold uppercase text-white lg:mb-0">
        Contactanos
      </h2>
      <p className="mb-4 text-xl text-white">Para saber más de WinForge</p>

      <form
        onSubmit={handleSubmit}
        className="relative flex w-full flex-col items-start gap-y-6 text-white"
      >
        <div className="flex w-full items-center gap-x-4">
          <input
            type="text"
            onChange={handleChange}
            required
            placeholder="NOMBRE"
            className="w-full rounded-2xl border-2 border-white bg-transparent px-4 py-4 outline-none focus:border-4 focus:border-primary"
            name="user_name"
          />
          <input
            type="text"
            required
            onChange={handleChange}
            placeholder="APELLIDO"
            className="w-full rounded-2xl border-2 border-white bg-transparent px-4 py-4 outline-none focus:border-4 focus:border-primary"
            name="last_name"
          />
        </div>
        <input
          type="email"
          required
          onChange={handleChange}
          placeholder="MAIL"
          className="w-full rounded-2xl border-2 border-white bg-transparent px-4 py-4 outline-none focus:border-4 focus:border-primary"
          name="email"
        />
        <textarea
          placeholder="TU MENSAJE"
          required
          onChange={handleChange}
          name="message"
          className="h-44 w-full resize-none rounded-2xl border-2 border-white bg-transparent px-4 py-4 outline-none focus:border-4 focus:border-primary"
        />
        <div className="flex w-full items-center justify-between">
          <p
            className={cn(
              "pointer-events-none rounded-md bg-red-400/20 px-2 text-sm text-red-400 opacity-0 transition-opacity",
              status.isError && "pointer-events-auto opacity-100",
            )}
          >
            Ocurrio un error al enviar el mail, intentelo mas tarde.
          </p>
          <button
            type="submit"
            disabled={status.isLoading}
            className="self-end rounded-full border-2 border-transparent bg-white bg-gradient-to-r px-6 py-2 font-semibold text-black transition-all hover:scale-[1.03] hover:border-white hover:bg-transparent hover:text-white"
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
              "Enviar"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
