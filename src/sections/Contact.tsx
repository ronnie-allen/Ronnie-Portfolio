// src/sections/Contact.tsx
import { useForm } from "react-hook-form";

export const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="bg-black text-white py-16 px-4">
      <h2 className="text-3xl text-center font-bold text-red-500 mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto flex flex-col gap-4">
        <input {...register("name")} placeholder="Name" className="bg-[#1a1a1a] p-3 rounded" />
        <input {...register("email")} placeholder="Email" className="bg-[#1a1a1a] p-3 rounded" />
        <textarea {...register("message")} placeholder="Message" className="bg-[#1a1a1a] p-3 rounded h-32" />
        <button className="bg-red-600 hover:bg-red-700 transition p-3 rounded">Send Message</button>
      </form>
    </div>
  );
};
