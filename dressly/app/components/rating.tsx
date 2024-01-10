import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";

export default function Rating({size}:{size:number}) {
    return (
        <span className='flex justify-between items-center gap-[2px]'>
            <Star size={size} color='gold' weight='fill'/>
            <Star size={size} color='gold' weight='fill'/>
            <Star size={size} color='gold' weight='fill'/>
            <Star size={size} color='gold' weight='fill'/>
            <StarHalf size={size} color='gold' weight='fill'/>
        </span>
    )
}