"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import items from '../info.json';
import Item from '../components/item.js';

export default function CannedGoods() {
    const [products, setProducts] = useState( () => {
        return items.filter((x) => x.category === "canned goods");
    });

    console.log(products);

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
        {/* header */}
        <div className="h-80 flex justify-center">
          <img className="absolute" src="/img/mini-header.png"></img>
          <span className="z-50 relative text-white items-center text-3xl font-bold pt-36">
            Canned Goods
          </span>
        </div>
        <div className="flex flex-row flex-wrap justify-center mt-10">
            {
                products.map((product, index) => {
                    return(
                        <Item product={product} index={index}/>
                    )
                })
            }
        </div>
        {/* footer */}
        <div className="text-sky-950 text-center flex flex-col mt-8 mb-8">
          <span className="text-2xl font-bold">AUR Marketing</span>
          <span>©2023 by AUR Marketing Corporation.</span>
        </div>
      </div>
    )
  }
  