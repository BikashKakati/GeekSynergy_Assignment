import React from 'react'
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const Card = ({ movieData }) => {
    return (
        <div className='relative card py-5 px-7 mb-1'>
            <div className="flex items-end gap-3 mb-4">
                <div className="flex flex-col items-center pr-2 md:pr-6">
                    <VscTriangleUp className='text-3xl'/>
                    {movieData?.vote}
                    <VscTriangleDown className='text-3xl mb-8'/>
                    Votes
                </div>
                <div className="h-40  rounded-md overflow-hidden">
                    <img className='w-full h-full object-contain object-center' src={movieData?.movie_poster} alt={movieData?.movie_name} />
                </div>
                <div className="">
                    <p className="text-2xl mb-2">{movieData?.movie_name}</p>
                    <div className="text-sm">
                        Genre:{" "}
                        {
                            movieData?.genre.map((text, index) => <span key={index}>{text},</span>)
                        }
                    </div>
                    <p className="text-sm">Director: {movieData?.director}</p>
                    <div className="text-sm">
                        Starring:{" "}
                        {
                            movieData?.starring.map((text, index) => <span key={index}>{text},</span>)
                        }
                    </div>
                    <p className="text-sm">
                        Mins | {movieData?.language} | {movieData?.release_date}
                    </p>
                    <p className='text-blue-400 text-sm font-medium'>
                        {movieData?.views} views | Voted by {movieData?.vote} People
                    </p>
                </div>
            </div>
            <button className='btn rounded-lg w-full'> Watch Trailer</button>
        </div>
    )
}

export default Card