import React from 'react'
import WidgetDB from './widgetDB';

const Widget = () => {
    console.log(WidgetDB);
    return (
        <>
            <div className="grid grid-cols md:grid-cols-3 p-4 gap-4">
                {
                    WidgetDB.map((val, i) => {
                        return (
                            <div className="bg-[#f6f3f3] shadow-xl flex md:flex-col" key={i}>
                                <img className='bg-cover w-[50px]' src={val.icon} alt="icon of widget" />
                                <div className="">
                                    <div className="font-semibold" >{val.title}</div>
                                    <div className="opacity-40" >{val.desc}</div>
                                </div>
                            </div >
                        )
                    })
                }
            </div>
        </>
    )
}

export default Widget