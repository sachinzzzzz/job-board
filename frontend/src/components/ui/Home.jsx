import React, { useEffect } from 'react'
import Navbar from './shared/navbar'
import HeroSection from '../HeroSection'
import CatagoryCrousal from '../CatagoryCrousal'
import LatestJobs from '../LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hoooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const{user}=useSelector(store =>store.auth);
  const navigate=useNavigate();
  useEffect(()=>{
  if(user?.role==='recruiter'){
    navigate("/admin/jobs")
  }
  },[])
  return (
    <div>
      <Navbar/>
       <HeroSection/> 
       <CatagoryCrousal/>
       <LatestJobs/>
       <Footer/>
    </div>
  )
}

export default Home
