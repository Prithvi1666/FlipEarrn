import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getProfileLink, platformIcons } from '../assets/assets';
import { useSelector } from 'react-redux';
import { ArrowLeftIcon, ArrowUpRightFromSquareIcon, Loader2Icon } from 'lucide-react';

const ListingDetails = () => {

  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY || '$'; 

  const [listing, setListing] = useState()
  const profileLink = listing && getProfileLink(listing.platform, listing.username)

  const {listingId} = useParams()
  const {listings} = useSelector((state)=> state.listing)

  useEffect(()=>{
    const listing = listings.find((listing)=>listing.id === listingId);
    if(listing){
      setListing(listing)
    }
  },[listingId, listings])


  return listing ? (
    <div className='max-auto min-h-screen px-6 md:px-16 lg:px-24 xl:px-32'>
        <button onClick={()=> navigate(-1)} className='flex items-center gap-2 text-slate-600 py-5'>
          <ArrowLeftIcon className='size-4' /> Go to Previous Page
        </button>

        <div className='flex items-center max-md:flex-col gap-10'>
          <div className='flex-1 max-md:w-full'>
            {/* Top Section */}
            <div className='bg-white rounded-xl border border-gray-200 p-6 mb-5'>
              <div className='flex items-start gap-3'>
                <div className='p-2 rounded-xl'>{platformIcons[listing.platform]}</div>
                  <div>
                    <h2 className='flex items-center gap-2 text-xl font-semibold text-gray-800'>{listing.title}
                    <Link target='_blank' to={profileLink}>
                    <ArrowUpRightFromSquareIcon className="size-4 hover:text-indigo-500" />
                    </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          {/* Seller Info & Purchase Options */}
          <div></div>
        </div>


    
  ) :(
    <div className='h-screen flex justify-center items-center '>
      <Loader2Icon className='size-7 animate-spin text-indigo-600'/>
    </div>
  )
}

export default ListingDetails