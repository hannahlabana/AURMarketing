"use client"

import React, { useState } from 'react';
import items from './info.json';
import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  const [products, setProducts] = useState(items);
  console.log(products);

  return (
    <main className="min-h-screen">
      {/* navigation */}
      <div className="flex justify-between h-16 px-48 items-center text-sky-950">
        <Link href="/">
          <div className="flex flex-row items-center">
            <img className="h-8" src="/img/aur-logo.png"></img>
            <span className="ml-2 pt-2">Marketing</span>
          </div>
        </Link>
        <div>
          <Link 
            href={{
              pathname: "/explore",
            }}
          >
            Explore
          </Link> 
          <Link
            href={{
              pathname: "/contact",
            }}
            className="ml-8"
          >
            Contact
          </Link>
        </div>
      </div>
      {/* header */}
      <div className="h-[92vh]">
        <img className="absolute" src="/img/header.png"></img>
        <div className="pl-32 z-50 relative pt-96 text-white content-center items-center">
          <span className="text-5xl font-bold">Welcome</span>
          <p className="text-sm w-[40vw] mt-5">
            Discover the taste of excellence with AUR Marketing – where quality meets convenience, and Filipino culinary traditions come to life. Thank you for choosing us as your preferred online destination for canned goods and noodles. We look forward to being a part of your culinary journey!
          </p>
        </div>
      </div>
      {/* categories */}
      <div className="flex flex-col justify-center h-[50vh]">
        <p className="text-4xl align-center text-center h-14 font-bold text-sky-950">Categories</p> 
        <div className="flex flex-row justify-center">
          <Link href="/noodles">
            <div className="flex flex-row items-center">
              <span className="text-4xl font-semibold mr-7 text-yellow-600">Noodles</span>
              <img src="/img/noodles.png"></img>
            </div>
          </Link>
          <Link href="/canned-goods">
            <div className="flex flex-row items-center">
              <img src="/img/canned-goods.png"></img>
              <span className="text-4xl font-semibold text-yellow-600">Canned Goods</span>
            </div>
          </Link>
        </div>
      </div>
      {/* about */}
      <div>
        <img src="/img/about.png"></img>
        <div className="bg-sky-950 h-80 w-full flex flex-col text-white justify-center px-56">
          <p className="text-4xl font-bold mb-9 text-center">What We&apos;re All About</p>
          <span className="text-center text-sm">
            AUR Marketing Corporation has been in the wholesale distribution for over 30 years. Specializing in food products, the company has been appointed as the exclusive distributor for a number of food products in the region. Current offerings include a variety of instant noodles and canned goods. Here at AUR Marketing Corporation, we offer the most competitive prices in the market for bulk buyers. We pride in keeping a high standard of service from order placing to delivery, ensuring that every customer is satisfied.
          </span>
        </div>
      </div>
      {/* convenience */}
      <div className="flex flex-row justify-center items-center my-16">
        <img src="/img/boxes.png"></img>
        <div className="ml-16 flex flex-col">
          <p className="text-sky-950 text-3xl font-bold">Convenience at a Click</p>
          <span className="w-96 text-sm mt-4">
            In a fast-paced world where time is of the essence, we bring you a curated selection of premium goods that you can purchase from the comfort of your home, office, or anywhere your day takes you.
          </span>
        </div>
      </div>
      {/* footer */}
      <div className="text-sky-950 text-center flex flex-col mb-8">
        <span className="text-2xl font-bold">AUR Marketing</span>
        <span>©2023 by AUR Marketing Corporation.</span>
      </div>

    </main>
  )
}
