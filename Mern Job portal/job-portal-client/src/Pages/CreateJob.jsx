import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable'

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills = selectedOption;
        //console.log(data);
        fetch("http://localhost:3000/post-job",{
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json()).then((result) => {
            console.log(result);
            if(result.acknowledged === true){
                alert("Job Posted Successfully");
            }
            reset();
        })
      }
    const options = [
        {value: "JavaScript", lable: "JavaScript"},
        {value: "C++", label: "C++"},
        {value: "HTML", label: "HTML"},
        {value: "CSS", label: "CSS"},
        {value: "React", label: "React"},
        {value: "Node", label: "Node"},
        {value: "MongoDB", label: "MongoDB"},
        {value: "Redux", label: "Redux"}

    ];
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        { /* form */ }
        <div className="bg-zinc-200 py-10 px-4 lg:px-16">
        
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
      
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Job Title</label>
                  <input type="text" defaultValue={"Web Developer"}
                 {...register("jobTitle")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Company Name</label>
                  <input type="text" placeholder='Ex: Microsoft'
                 {...register("companyName")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>
            </div>

            {/* second row */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Minimum Salary</label>
                  <input type="text" placeholder="$20k"
                 {...register("minPrice")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Maximum Salary</label>
                  <input type="text" placeholder='$120k'
                 {...register("maxPrice")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>
            </div>
            {/* third row */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Salary Type</label>
                   <select {...register("salaryType")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                    <option value="">Choose your salary</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                   </select>
                </div>
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Job Location</label>
                  <input type="text" placeholder='Ex: New York'
                 {...register("jobLocation")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>
            </div>

            {/* 4th row */}
            <div className='create-job-flex'>
                
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Job Posting Date</label>
                  <input type="date" placeholder='Ex: 2024-02-04'
                 {...register("postingDate")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Experience Level</label>
                   <select {...register("experienceLevel")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                    <option value="">Choose your experience</option>
                    <option value="NoExperience">Any Experience</option>
                    <option value="Internship">Internship</option>
                    <option value="Work remotely">Work remotely</option>
                   </select>
                </div>
            </div>
            {/* 5th roe */}
            <div>
                <label className='block mb-2 text-lg'>Required Skill Sets:</label>
                <CreatableSelect defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti
                className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900
                placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
            </div>

            {/* 6th row */}
            <div className='create-job-flex'>
                
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Company Logo</label>
                  <input type="url" placeholder='Paste your company logo URL: https://weshare.com/img1'
                 {...register("companyLogo")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                   <label className='block mb-2 text-lg'>Employment Type</label>
                   <select {...register("employmentType")} className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                    <option value="">Choose your job type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Temporary">Temporary</option>
                   </select>
                </div>
            </div>

            {/* 7th row */}
            <div className='w-full'>
                <label className='block mb-2 text-lg'>Job Description</label>
                <textarea className='w-full pl-3 py-1.5 placeholder:text-gray-700 focus:outline-none' 
                rows={6}
                placeholder='Job Description...'
                {...register("description")}/>
            </div>

            {/* last row */}
            <div>
                <label className='block mb-2 text-lg'>Job Posted By</label>
                <input type="email" 
                placeholder='Your email'
                className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'
                {...register("postedBy")}/>
            </div>

      <input className='my-block bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' type="submit" />
    </form>
        </div>

        
    </div>
  )
}

export default CreateJob