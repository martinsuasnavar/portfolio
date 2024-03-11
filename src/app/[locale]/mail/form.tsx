"use client";
import WhiteBox from "@/app/components/white-box";
import { useState, ChangeEvent, FormEvent } from "react";


interface FormData {
  email: string;
  name: string;
  subject: string;
  message: string;
}


interface Internalization {
    titleCard: string,
    email: string,
    name: string;
    subject: string;
    message: string;
    send: string;
}

interface Props {
    translations: Record<string, string>;
  }
  

export default function Form({titleCard, email, name, subject, message, send }: Internalization) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    subject: '',
    message: ''
  });



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      // Optionally, handle response (e.g., show success message)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, handle error (e.g., show error message)
    }
  };

  return (
    <div className="bg-gradient-to-r from-black to-indigo-950 min-h-screen flex justify-center items-center">
      <div className=" p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-6"><WhiteBox>{titleCard}</WhiteBox></h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-blue-100">{email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-blue-800 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-blue-100">{name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-blue-800 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-blue-100">{subject}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="text-blue-800 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-blue-100">{message}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="text-blue-800 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {send}
          </button>
        </form>
      </div>
    </div>
  );
}