"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await sendEmail(data);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5 mt-20'>
        <label htmlFor='name' className='mb-3 block text-base font-medium text-black'>
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md'
          {...register('name', { required: true })}
          disabled={isSubmitting}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='email' className='mb-3 block text-base font-medium text-black'>
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md'
          {...register('email', { required: true })}
          disabled={isSubmitting}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='message' className='mb-3 block text-base font-medium text-black'>
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md'
          {...register('message', { required: true })}
          disabled={isSubmitting}
        ></textarea>
      </div>
      <div>
        <button
          className={`rounded-md bg-black mb-20 py-3 px-8 text-base font-semibold text-white outline-none ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:shadow-form'}`}
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default Contact;
