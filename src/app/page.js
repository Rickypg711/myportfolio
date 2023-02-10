'use client'
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import {AiFillTwitterCircle, AiFillLinkedIn, AiFillInstagram} from 'react-icons/ai'
import {useState} from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ""}>
    <main className="bg-white px-10 md:px-20  lg:px-40 dark:bg-gray-900">
      <section className="">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className=" text-xl">developedbyricardo</h1>
          <ul className="flex items-center ">
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
            </li>
            <li>
              <Link
                href="/"
                className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        {/* hero shit */}
        <div className=" text-center p-10">
          <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl" >Ricardo Paredes</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Developer and Chef</h3>
          <p className="text-medium py-5 leading-8 md:text-xl max-w-xl mx-auto">
            fdhjkhgjkshdfkghdjkgh jkdfhgjkhdfjkhgjkdfhkjghjkhglkfjhdkjlhjfkdh
          kjkljkljlkdfjgkljdfkljgdfkljgkldjfkgljdfkgljkdlfsjgkljsdfklgj
          jhdfhgkjhdjkfhg;jdfkj kdjfhjhdfjk hkhkjhsdf kh sdkhd
           jkhdf </p>

        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <Link href={'https://www.instagram.com/rickyparedess/'}><AiFillInstagram/></Link>
          {/* <AiFillLinkedIn/> */}
          <AiFillTwitterCircle/>
        </div>
        <div className="relative">
          <Image/>
        </div>
      </section>

      {/* sec2 */}
      <section>
        <div>
          <h3 className="Text-3xl py-1">Services I Offer</h3>
          <p className="text-medium py-2 leading-8">
          fdhjkhgjkshdfkghdjkgh jkdfhgjkhdfjkhgjkdfhkjghjkhglkfjhdkjlhjfkdh
          kjkljkljlkdfjgkl fdhjkhgjkshdfkghdjkgh jkdfhgjkhdfjkhgjkdfhkjghjkhglkfjhdkjlhjfkdh
          kjkljkl<span className=" text-teal-500">jlkdfjgkljdfkljgdfkljgkldjfkgljdfkgljkdlfsjgkl</span> jsdfklgj
          jhdfhgkjhdjkfhg;jdfkj kdjfhjhdfjk hkhkjhsdf kh sdkhd
           jkhdf jdfkljgdf<spam className='text-teal-500'>kljgkldjfkgljdfkgljkdlfsjkljgkldjfkgljdfkgljkdlfsjg</spam>ljgkldjfkgljdfkgljkdlfsjkljgkldjfkgljdfkgljkdlfsjgljsdfklgj
          jhdfhgkjhdjkfhg;jdfkj kdjfhjhdfjk hkhkjhsdf kh sdkhd
           jkhdf 
           </p>
        </div>

        <div className=" lg:flex gap-10">
          {/* cards */}
          {/* 1 */}
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image />
            <h3 className=" text-lg font-medium pt-8 pb-2">beautiful designs</h3>
            <p className="py-2">hjgdfgh9iuyuiergj hhdfuher </p>
            <h4 className=" py-4 text-teal-600">designs tools i use</h4>
            <p className=" text-gray-800 py-1">this</p>
            <p className=" text-gray-800 py-1">this</p>
            <p className=" text-gray-800 py-1">this</p>
            <p className=" text-gray-800 py-1">this</p>
          </div>

          {/* 2 */}
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image />
            <h3 className=" text-lg font-medium pt-8 pb-2">beautiful designs</h3>
            <p className="py-2">hjgdfgh9iuyuiergj hhdfuher </p>
            <h4 className=" py-4 text-teal-600">designs tools i use</h4>
            <p className=" text-gray-800 py-1">this</p>
            <p className=" text-gray-800 py-1">this</p>
            <p className=" text-gray-800 py-1">this</p>
            <p className=" text-gray-800 py-1">this</p>
          </div>

          {/* 3 */}
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image />
            <h3 className=" text-lg font-medium pt-8 pb-2">beautiful designs</h3>
            <p className="py-2">hjgdfgh9iuyuiergj hhdfuher </p>
            <h4 className=" py-4 text-teal-600">designs tools i use</h4>
            <p className=" text-gray-800 py-1">this</p>
            <p className=" text-gray-800 py-1">this</p>
            <p className=" text-gray-800 py-1">this</p>
            <p className=" text-gray-800 py-1">this</p>
          </div>
        </div>
      </section>

      {/* sec3 */}
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-medium py-2 leading-8">
          fdhjkhgjkshdfkghdjkgh jkdfhgjkhdfjkhgjkdfhkjghjkhglkfjhdkjlhjfkdh
          kjkljkljlkdfjgkl fdhjkhgjkshdfkghdjkgh jkdfhgjkhdfjkhgjkdfhkjghjkhglkfjhdkjlhjfkdh
          kjkljkl<span className=" text-teal-500">jlkdfjgkljdfkljgdfkljgkldjfkgljdfkgljkdlfsjgkl</span> jsdfklgj
          jhdfhgkjhdjkfhg;jdfkj kdjfhjhdfjk hkhkjhsdf kh sdkhd
           jkhdf jdfkljgdf<spam className='text-teal-500'>kljgkldjfkgljdfkgljkdlfsjkljgkldjfkgljdfkgljkdlfsjg</spam>ljgkldjfkgljdfkgljkdlfsjkljgkldjfkgljdfkgljkdlfsjgljsdfklgj
          jhdfhgkjhdjkfhg;jdfkj kdjfhjhdfjk hkhkjhsdf kh sdkhd
           jkhdf 
           </p>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image className="rounded-lg" ></Image>
          </div>
          <div className="basis-1/3 flex-1">
            <Image className="rounded-lg" ></Image>
          </div>
          <div className="basis-1/3 flex-1">
            <Image className="rounded-lg" ></Image>
          </div>
          <div className="basis-1/3 flex-1">
            <Image className="rounded-lg" ></Image>
          </div>
          <div className="basis-1/3 flex-1">
            <Image className="rounded-lg" ></Image>
          </div>
          <div className="basis-1/3 flex-1">
            <Image className="rounded-lg" ></Image>
          </div>
        </div>

      </section>

    </main>
    </div>
  );
}
