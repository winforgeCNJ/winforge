import { sendMail } from './utils/send-mail';
import SuccessForm from './success-form';
import { useState } from 'react';
import { cn } from '@/lib/cn';

export type InitialValuesT = {
  user_name : string
  last_name : string
  email : string
  message : string
}

const initialValues : InitialValuesT = {
  user_name : '',
  last_name : '',
  email : '',
  message : ''
}

export default function Form() {

  const [values, setValues] = useState(initialValues)

  const [status, setStatus] = useState({
    isLoading: false,
    isSuccess: false,
    isError : false
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prevValues => ({
      ...prevValues,
      [e.target.name] : e.target.value
    }))
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevValues) => ({
      ...prevValues,
      isLoading: true,
    }));
    try {
      const result = await sendMail(values);

      if (result.text !== "OK") {
        setStatus(prevValues => ({
          ...prevValues,
          isError : true
        }))
        return
      }

      setStatus(prevValues => ({
        ...prevValues,
        isSuccess : true
      }))

     
    } catch (error) {

      console.log(error)
      setStatus(prevValues => ({
        ...prevValues,
        isError : true
      }))
    
    } finally {
      setStatus((prevValues) => ({
        ...prevValues,
        isLoading: false,
      }));
    }
   
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
            onChange={handleChange}
            required
            placeholder="NOMBRE"
            className="border-white border-2 bg-transparent rounded-2xl px-4 w-full py-4 outline-none focus:border-4 focus:border-primary"
            name="name"
          />
          <input
            type="text"
            required
            onChange={handleChange}
            placeholder="APELLIDO"
            className="border-white border-2 bg-transparent rounded-2xl px-4 w-full py-4 outline-none focus:border-4 focus:border-primary"
            name="lastName"
          />
        </div>
        <input
          type="email"
          required
          onChange={handleChange}
          placeholder="MAIL"
          className="border-white border-2 bg-transparent rounded-2xl px-4 w-full py-4 outline-none focus:border-4 focus:border-primary"
          name="mail"
        />
        <textarea
          placeholder="TU MENSAJE"
          required
          onChange={handleChange}
          name="message"
          className="border-white border-2 bg-transparent rounded-2xl px-4 w-full py-4 outline-none focus:border-4 resize-none h-44 focus:border-primary"
        />
        <div className="flex items-center justify-between w-full  ">
          <p className={cn('text-red-400 opacity-0 pointer-events-none transition-opacity bg-red-400/20 px-2 rounded-md text-sm', status.isError && 'opacity-100 pointer-events-auto ')}>Ocurrio un error al enviar el mail, intentelo mas tarde.</p>
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
        </div>
      </form>
    </section>
  );
}
