import dayjs from 'dayjs';
import React from 'react'
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const Card = ({ movieData }) => {
    return (
        <div className='relative card h-auto md:max-h-[18rem] md:max-w-[26rem] py-2 px-4 mb-1 md:m-3'>
            <div className="flex items-end gap-2 md:gap-3 mb-4">
                <div className="flex flex-col items-center pr-0 md:pr-6">
                    <VscTriangleUp className='text-xl md:text-3xl' />
                    {movieData?.totalVoted}
                    <VscTriangleDown className='text-xl md:text-3xl mb-8' />
                    Votes
                </div>
                <div className="h-40 w-24 rounded-md overflow-hidden">
                    <img className='w-full h-full object-cover object-center' src={movieData?.poster} alt={movieData?.title} />
                </div>
                <div className="">
                    <p className="text-xl md:text-2xl mb-2">{movieData?.title}</p>
                    <div className="text-xs md:text-sm">
                        Genre:{" "}
                        {movieData?.genre}
                    </div>
                    <p className="text-xs md:text-sm">Director: {movieData?.director[0]}</p>
                    <div className="text-xs md:text-sm">
                        Starring:{" "}
                        {
                            movieData?.stars.length ?
                            movieData?.stars.join(",").slice(0,20) + "..."
                            :"Not Mention"
                        }
                    </div>
                    <p className="text-xs md:text-sm">
                        Mins | {movieData?.language} | {dayjs(
                            new Date(movieData?.releasedDate * 1000)
                        ).format("YYYY-MMM-DD")}
                    </p>
                    <p className='text-blue-400 text-xs md:text-sm font-medium'>
                        {movieData?.pageViews} views | Voted by {movieData?.totalVoted} People
                    </p>
                </div>
            </div>
            <button className='btn rounded-lg w-full'> Watch Trailer</button>
        </div>
    )
}

export default Card