import { cva } from 'class-variance-authority'
import React from 'react'
import cn from '../util/cn'

const Button = ({children,className,variant,size,...props}) => {
  return (
        <button className={cn(buttonVariants({variant,size,className}))} {...props}>{children}</button>
  )
}

export default Button

const buttonVariants = cva("rounded-md",{
    variants:{
        variant:{
            primary:"border-2 border-white bg-black text-white hover:bg-white hover:text-slate-950",
            success:"border-none bg-green-500 text-white hover:bg-green-600",
            warning:"border-none bg-orange-500 text-white hover:bg-orange-600",
            danger:"border-none bg-red-500 text-white hover:bg-red-600"
        },
        size:{
            sm:"font-thin text-sm px-1 py-0",
            md:"font-normal text-base px-2 py-1",
            xl:"font-semibold text-xl px-4 py-2"
        }
    },
    defaultVariants:{
        variant:"primary",
        size:"md"
    }
})