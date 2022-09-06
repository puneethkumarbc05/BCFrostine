import React from 'react'
import { Abbott_page_2_body1 } from './Abbott_page_2_body1'
import { Abbott_page_2_body2 } from './Abbott_page_2_body2'
import { Abbott_page_2_body3 } from './Abbott_page_2_body3'
import { Abbott_page_2_body4 } from './Abbott_page_2_body4'
import { Abbott_page_2_footer } from './Abbott_page_2_footer'
import { Abbott_page_2_header } from './Abbott_page_2_header'

export const Abbott_page_2_container = () => {
  return (
    <div>
       <Abbott_page_2_header />
       <Abbott_page_2_body1 />
       <Abbott_page_2_body2 /> 
       <Abbott_page_2_body3 /> 
       <Abbott_page_2_body4 /> 
       <Abbott_page_2_footer />
    </div>
  )
}
