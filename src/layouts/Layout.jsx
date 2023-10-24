import React from 'react'

export default function Layout({ children }) {

    return (
        <div className='m-4 font-cairoRegular'>
            <header className='flex items-center justify-center gap-x-10 bg-DeepNightBlack text-Snow w-full h-14 rounded-xl'>
                <h1 className='text-xl text-Green font-semibold'>React - Vite - Starter</h1>
            </header>
            {children}
            {/* <footer></footer> */}
        </div>
    )
}
