import React, { Fragment } from 'react';
import cogs from "./stylelibrary/index";
const { cog } = cogs;

export const H2 = ({children, heading, caption, headingStyles, captionStyle, ...props}) => (
  <div className={cog('headings.box', { type: '2' })} {...props}>
    <h2 className={cog('headings.heading', { type: '2' })} {...headingStyles}>{children || heading}</h2>
    { caption ? <div className={cog('headings.caption', { type: '2' })} style={captionStyle}>{caption}</div> : null }
  </div>
)

export const H3 = ({ children, heading, caption, headingStyles, captionStyle, ...props }) => (
  <div className={cog('headings.box', {type: '3'})} {...props}>
    <h3 className={cog('headings.heading', { type: '3' })} {...headingStyles}>{children || heading}</h3>
    {caption ? <div className={cog('headings.caption', { type: '3' })} style={captionStyle}>{caption}</div> : null }
  </div>
)
