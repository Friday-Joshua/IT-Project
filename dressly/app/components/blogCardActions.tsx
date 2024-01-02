'use client'

import { ShareFat, Heart } from "@phosphor-icons/react/dist/ssr"

export default function BlogCardActions({likes}:{likes:number}) {
    return (
      <div className='flex justify-between items-center gap-8'>
          <div className="flex justify-between items-center gap-2 active:scale-95 active:opacity-50">
            <Heart size={24}  className="text-icon transition " />
            <small className="text-icon">{likes}</small>
          </div>
          <ShareFat size={24} className="text-icon transition active:scale-95 active:opacity-50"/>
      </div>
    )
  }