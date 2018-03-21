import React, { Fragment } from 'react';
import cogs from "./stylelibrary/index";
const { cog } = cogs;

export const H2 = ({children}) => (
  <h2 className={cog('heading', { type: '2'})}>{children}</h2>
)

export const H3 = ({ children }) => (
  <h3 className={cog('heading', { type: '3' })}>{children}</h3>
)