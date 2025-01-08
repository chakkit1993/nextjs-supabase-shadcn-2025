import React from 'react'

const TitleEvent = (props: { titleName: String }) => {
  return (
    <div className="pt-6 pb-6 text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
        {props.titleName}
      </div>
  )
}

export default TitleEvent