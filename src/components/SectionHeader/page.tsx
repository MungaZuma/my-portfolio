import React from 'react'

const header = (props: any) => {
  return (
    <div>
      <h3 className='tracking-[20px] text-2xl text-gray-500 uppercase'>
        {props.sectionHeader}
      </h3>
    </div>
  )
}

export default header