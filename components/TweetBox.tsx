import React, { useState } from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon
} from '@heroicons/react/outline'

function TweetBox() {
    const [input, setInput]  = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
        <img className='h-14 w-14 rounded-full object-cover mt-4'
         src="https://lh3.googleusercontent.com/oxYiVqM9acO1By3B_BhrH-ITU9G8RXYz8Oh5UIIxULuyjr4dB8ldYCoafRtK-Aj1KGRMLV3gmOdig-RiRDQPk2oNrYbKKyPkq8qoKxGvv3_fmr0YG1YIqmmIsvHywH1hS-TeNfUO45MZOEXxviHo6vLpvISgiuQdTPXxFXoEcN4nWcxdfw1HHA5gRrh_cNhNle_OohgoJnV-i2I4O0q0hM2RAJ06gqimBoKq9f0jrM7piB65UY9Biqo83Q67_2pG_3QDogm6luu7vzep4CT78Qml62VNdwC7H-y8tO7vqflKjmTi6Jrv4Cifxc4Px5jgMX4ziZWMPicmGr7s-DfDvVAEUwopU_cqqXGw-iZij6Pl9uQR48N71nm4aKwmmublpNLEPbIHXyfWQ-2O8GKxUo_hMTljIOF9YU-Ff0bs-F601E6bkOhV-rE4huiYcFutuMysjHU-iLhWRqK624ndHw_374-sWMNpy_ZzaDkFvPrXteuNkXk2Hcz9ypAzExiAgel4ZvtxANKFDZPxlJf1oMxkCgU7ksQRFFYGHLIBv0ekgFbA59ak4yXTTQw0OS1LkYJKDWwEmLJVVMYCLhkW3WRqwvV5ktYfJ2Vnm_hDTWYKciYEUEW5_2SQ9L5Q0M9NHI75EDAmJHYuJmmUrv3iIyxkGf2yaa7Bjy6MmrfM5IEy9eDRGQ9hRmPROva6J8P7tJX8Nva8k7U-TJJ6Uvqsr3D_85jhhnfPH4Fm03g173kCi7Buvo_q9HM0E4EdVw=w422-h914-no?authuser=0"
        alt=""/>

        <div className='flex flex-1 items-center pl-2'>
            <form  className="flex flex-1 flex-col">
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" placeholder="what's Happening?"
                className="h-24 w-full text-xl outline-none
                placeholder:text-xl"/>
                <div className="flex items-center">
                    <div className="flex flex-1 space-x-2 text-blue-300">
                        <PhotographIcon className="h-5 w-5 cursor-pointer transition-transfrom
                        duration-150 ease-out hover:scale-150"/>
                        <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transfrom
                        duration-150 ease-out hover:scale-150"/>
                        <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transfrom
                        duration-150 ease-out hover:scale-150"/>
                        <CalendarIcon className="h-5 w-5 cursor-pointer transition-transfrom
                        duration-150 ease-out hover:scale-150"/>
                        <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transfrom
                        duration-150 ease-out hover:scale-150"/>

                    </div>

                    <button
                        disabled={!input}
                    className="rounded-full bg-blue-300 px-5 py-2 font-bold
                     text-white disabled:opacity-40">
                         Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox