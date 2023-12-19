"use client"

import React from 'react'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import items from '../info.json';


export default function Product() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  console.log(id);
  const product = items.filter((x) => x.id == id);
  console.log(product);
  
  return (
    <div>
        {/* navigation */}
        <div className="flex justify-between h-16 px-48 items-center text-sky-950">
          <Link href="/">
            <div className="flex flex-row items-center">
              <img className="h-8" src="/img/aur-logo.png"></img>
              <span className="ml-2 pt-2">Marketing</span>
            </div>
          </Link>
          <div>
            <Link href="/explore">Explore</Link> 
            <Link href="/contact" className="ml-8">Contact</Link>
          </div>
        </div>
        {/* body */}
          <div className="flex flex-row justify-center mt-12">
              <div className="border border-black rounded-xl w-[30vw] h-[50vh] flex justify-center items-center mr-12">
                  <img
                    src={`/img/products/${id}.jpg`}
                    className="p-8 max-w-[32vw] max-h-[40vh]">
                  </img>
              </div>
              <div className="my-10">
                <div>
                  <p className="text-4xl font-bold text-sky-950">{product[0].product}</p>
                  <div className="mt-12">
                    <span className="text-2xl font-bold text-yellow-600">P{product[0].price}</span>
                    <p className="uppercase">{product[0].desc}</p>
                  </div>
                  <Link href="/contact">
                    <p className="text-2xl font-bold text-sky-950 mt-48">Contact us to order</p>
                  </Link>
                </div>
              </div>
          </div>
          {/* footer */}
          <div className="text-sky-950 text-center flex flex-col mt-32 mb-8">
            <span className="text-2xl font-bold">AUR Marketing</span>
            <span>©2023 by AUR Marketing Corporation.</span>
          </div>
    </div>
  )
}
