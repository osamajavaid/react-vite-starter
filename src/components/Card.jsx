import React from 'react'

export default function Card({ title }) {
    return (
        <div className="flex items-center text-2xl justify-center rounded-lg bg-DeepNightBlack hover:bg-EveningBlack h-20">
            <span>{title}</span>
        </div>
    )
}
