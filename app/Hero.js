import React from 'react'
import Graph from './Graph'

function Hero() {
  return (
    <div className='bg-slate-300'>
        <h1 className="p-8 text-center text-[3em] font-bold bg-slate-500">Exposing the Mask: <span className='text-blue-200'>Unveiling Deep Fake Deception</span></h1>
        <div className='grid grid-cols-3 p-4'>
            <div className='col-span-2 font-serif font-medium text-justify pt-5 text-lg pl-7 pr-10 pb-10'>
                Deepfake technology utilizes artificial intelligence and machine learning algorithms to create highly realistic fake videos or images that convincingly depict individuals doing or saying things they never did. Its impact is significant, as it poses serious threats to various aspects of society, including misinformation, privacy violations, and potential damage to individuals' reputations and trust. Deepfakes can be weaponized for political manipulation, financial fraud, or even to incite violence. Identifying deepfakes is crucial in safeguarding against the spread of misinformation and protecting the integrity of digital content. It's essential to develop robust detection methods, educate the public about the existence and potential dangers of deepfakes, and implement policies to mitigate their harmful effects. Failure to address the proliferation of deepfake technology could erode trust in media, undermine democratic processes, and have far-reaching societal consequences. If you want to check any of your video use our latest model to check. Click here
                <span className=' pl-2'>
                    <a href='#videoUpload'><button className='bg-gray-200 text-black font-bold hover:bg-gray-600 rounded-lg transition-all ease-in pl-2 pr-2'>Detect</button></a>
                </span>
            </div>
            <div className='pl-6 p-4 bg-slate-200'>
                <Graph/>
                {/* Increase in Deep fake videos */}
            </div>
        </div>
    </div>
  )
}

export default Hero