import React from 'react'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()
  // console.log(show)
  console.log(`Fetched show: ${show.name}`)

  return {show}
}

export default Post