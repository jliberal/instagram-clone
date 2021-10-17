import React from 'react'
import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from '../components/MiniProfile'
import Suggestions from '../components/Suggestions'

function Feed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Section */}
        <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts/>
        </section>

      {/* Section */}
        <section className="hidden xl:inline-grid md:col-span-1">
        {/* Mini Profile */}
        <div>
          <MiniProfile/>
          <Suggestions />
        </div>
        {/* Suggestions */}
        </section>

    </div>
  )
}

export default Feed
