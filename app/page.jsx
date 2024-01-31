import React from 'react'
import Feed from '@components/Feed'

const home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover And Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts </span>
        </h1>
        <p className='desc text-center'>
            Proptopia is an open source AI prompting tool for mdern world to discover , create and share creative propms
        </p>
        <Feed />
    </section>
  )
}

export default home