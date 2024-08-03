    import React from 'react'
    import Card from '@components/Card'
    import Car from '../../public/car.png'
    import Laptop from '../../public/laptop.png'
    import Mobile from '../../public/mobile.png'


    const products=[
        {name:'Car',
            price:40000,
            img:Car,      
        
            },
        {
            name:'Laptop',
            price:'600',
            img:Laptop,

            },
            { name:'Mobile',
                price:'500',
                img:Mobile,

            }
        
    ]

    const home = () => {

    return (
        <div>
            {products.map((product)=>(
            <Card product={product}/>
            ))}

            </div>
    )
    }

    export default home