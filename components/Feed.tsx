import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { Tweet } from '../typing'
import TweetBox from './TweetBox'
import TweetComponent from './Tweet'
interface Props {
  tweets: Tweet[]
}

function Feed({ tweets }: Props) {
  return (
    <div className="col-span-7 border lg:col-span-5">
      <div className=" flex items-center justify-between">
        <div className="p-5 pb-0 text-xl font-bold">Home</div>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      <div>
        <TweetBox />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
