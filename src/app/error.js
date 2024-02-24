'use client' // Error components must be Client Components

import { useEffect } from 'react'
import ErrorPage from './../components/error'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            < ErrorPage />
            <button
                className=' text-center font-bold border border-black px-4 py-2 mt-4 rounded-xl'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Home Sweet Home!
            </button>
        </div>
    )
}