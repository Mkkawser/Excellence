import React from 'react'
import BrandBD from './brandDB';

const Brand = () => {

    return (
        <>
            <div className="grid grid-cols-3 justify-items-center">
                {
                    BrandBD.map((val, i) => {
                        return (
                            <div className="w-[80%] md:w-1/2 p-6" key={i}>
                                <img className='opacity-40 hover:opacity-90' src={val.pic} alt="brand" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Brand