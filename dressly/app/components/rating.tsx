import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";

export default function Rating() {
    return (
        <span className='flex justify-between items-center gap-1'>
            <Star size={16} color='gold' weight='fill'/>
            <Star size={16} color='gold' weight='fill'/>
            <Star size={16} color='gold' weight='fill'/>
            <Star size={16} color='gold' weight='fill'/>
            <StarHalf size={16} color='gold' weight='fill'/>
        </span>
    )
}