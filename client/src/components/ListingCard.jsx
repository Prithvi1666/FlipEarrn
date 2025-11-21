import React from 'react'

const ListingCard = ({listing}) => {

    const currency = import.meta.env.VITE_CURRENCY || '$';

  return (
    <div className='relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition'>
         {/* Featured Banner */}
            {listing.isFeatured && (
             <>
             <p className='py-1' />
             <div className='absolute top-0 left-0 w-full bg-gradient-to-r from-pink-500
                 to-purple-500 text-white text-center text-xm font-semibold py-1 tracking-wide uppercase'>Featured</div>
             </>
            )}
    </div>
  )
}

export default ListingCard