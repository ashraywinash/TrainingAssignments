import React from 'react'
import {useForm,} from 'react-hook-form'
import TextType from '../TextType/Texttype'

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    function onSubmitButtonClick(info){
        console.log(info)
    }

  return (
    <div className='w-screen h-screen font-mono mt-[5%]'>
        
        <form action="/" className='flex-col flex gap-4 w-3/5 m-auto border-black border-solid border-2 p-5 shadow-2xl' onSubmit={handleSubmit(onSubmitButtonClick)}>
            <TextType text="SignUp Form"/>
            
            <div className='flex gap-4 p-3 text-xl items-center ml-[25%] relative'>
                {errors.nameFeild?.type === 'required' && (<h3 className='absolute -top-2 -left-2 text-red-700'>*required</h3>)}
                {errors.nameFeild?.type === 'maxLength' && (<h3 className='absolute -top-2 -left-2 text-red-700'>*8-12 chars</h3>)}
                {errors.nameFeild?.type === 'minLength' && (<h3 className='absolute -top-2 -left-2 text-red-700'>*8-12 chars</h3>)}
                <label className='font-bold' htmlFor="nameFeild">enter your name:</label>
                <input className='p-3 focus:outline-none border-b-2 pb-0 focus:border-black' type="text" id="nameFeild" placeholder='name' {...register("nameFeild",
                {required:true,minLength:8,maxLength:12})}/>
            </div>
            
            <div className="flex gap-4 p-3 text-xl items-center ml-[25%] relative">
                {errors.birthday?.type === 'required' && (<h3 className='absolute -top-2 -left-2 text-red-700'>*required</h3>)} 
                <label className='font-bold' htmlFor="birthday">birthday:</label>
                <input className='p-3' type="date" id="birthday" {...register("birthday",{required:true})}/>
            </div>
            
            <div className="flex gap-4 p-3 text-xl items-center ml-[25%] relative">
                {errors.gender && (<h3 className='absolute -top-4 -left-2 text-red-700'>*required</h3>)}
                <label className='font-bold' htmlFor="">gender:</label>
                <input className='p-3' type="radio" id="gender" name='gender' value="male" {...register("gender",{required:true})}/>
                <label className='' htmlFor="gender">male</label>
                <input className='p-3' type="radio" id="gender" name='gender' value="female" {...register("gender",{required:true})}/>
                <label htmlFor="gender">Female</label>
            </div>

            <div className="flex gap-4 p-3 text-xl items-center ml-[25%] relative">
                {errors.email?.type === 'required' && (<h3 className='absolute -top-4 -left-2 text-red-700'>*required</h3>)}
                <label className='font-bold' htmlFor="emailFeild">email:</label>
                <input className='p-3 pb-0 focus:outline-none border-b-2 focus:border-black' type="email" id="emailFeild" placeholder='email' {...register("email",{required:true})}/>
            </div>

            <div className="flex gap-4 p-3 text-xl items-center ml-[25%] relative">
                {errors.phoneNumber?.type === 'required' && (<h3 className='absolute -top-4 -left-2 text-red-700'>*required</h3>)}
                {errors.phoneNumber?.type === 'minLength' && (<h3 className='absolute -top-4 -left-2 text-red-700'>*10 nums required</h3>)}
                {errors.phoneNumber?.type === 'maxLength' && (<h3 className='absolute -top-4 -left-2 text-red-700'>*10 nums required</h3>)}
                <label className='font-bold' htmlFor="phoneNumber">phone:</label>
                <input className='p-3 focus:outline-none pb-0 border-b-2 focus:border-black' type="text" id="phoneNumber" placeholder='phone number' {...register("phoneNumber",{required:true,
                minLength:10,maxLength:10})}/>
            </div>
            <div className="flex gap-4 p-3 text-xl items-center ml-[25%] relative">
                {errors.subjectFeild?.type === 'required' && (<h3 className='absolute -top-4 -left-2 text-red-700'>*required</h3>)}
                <label className='font-bold' htmlFor="subjectFeild">subject:</label>
                <select className='focus:outline-none border-b-2' id="subjectFeild" {...register("subjectFeild",{required:true})}>
                    <option value="" disabled>Choose a subject</option>
                    <option value="JAVA">JAVA</option>
                    <option value="DBMS">DBMS</option>
                    <option value="MFCS">MFCS</option>
                    <option value="Data Visualisation">Data Visualisation</option>
                </select>
            </div>
            
            <button type='submit' className='bg-black text-white w-32 p-3 rounded-md hover:bg-gray-800' > SignUp </button>
            
        </form>
    </div>
  )
}

export default FormComponent
