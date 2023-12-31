'use client'

export default function Spacer({size}:{size:number}) {
    let space = '';
    switch(size) {
        case 2: space = 'my-2';
        break;
        case 4: space = 'my-4';
        break;
        case 6: space = 'my-6';
        break;
        case 8: space = 'my-8';
        break;
        case 12: space = 'my-12';
        break;
        case 16: space = 'my-16';
        break;
        case 20: space = 'my-20';
        break;
        case 24: space = 'my-24';
        break;
        case 28: space = 'my-28';
        break;
        case 32: space = 'my-32';
        break;
        case 36: space = 'my-36';
        break;
        case 40: space = 'my-40';
        break;
        default: break;   
    }

    return (
        <hr className={`${space} border-none`}/>
    )
}