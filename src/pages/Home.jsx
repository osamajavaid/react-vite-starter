import React from 'react'
import Card from '@components/Card'

export default function Home() {
    return (
        <div className='flex flex-col gap-y-4 my-12'>
            <h2 className='text-2xl text-white font-semibold'>Libraries used in this stater</h2>
            <div className="grid grid-cols-5 w-full gap-4 text-LightGray">
                <Card title="tailwindcss" />
                <Card title="react-router-dom" />
                <Card title="react-query" />
                <Card title="axios" />
                <Card title="dayjs" />
                <Card title="vite-plugin-svgr" />
                <Card title="sass" />
            </div>
        </div>
    )
}
