import { useState ,useEffect} from 'react'
import Slider from 'react-slick';
import React from "react";
import './App.css'

import phone1 from './assets/phone1.svg'
import argent from "./assets/argent.svg"
import partner from "./assets/partner.svg"
import samsung from "./assets/samsung.svg"
import unity from "./assets/unity.svg"
import amazon from "./assets/amazon.svg"
import apple from "./assets/apple.svg"
import registre from "./assets/registre.svg"
import nouveau from "./assets/nouveau.svg"
import succes from "./assets/succes.svg"
import spotifay from "./assets/spotifay.svg"
import exp1 from "./assets/exp1.svg"
import exp2 from "./assets/exp2.svg"
import exp3 from "./assets/exp3.svg"
import exp4 from "./assets/exp4.svg"
import map from "./assets/map.svg"
import visa from "./assets/visa.svg"
import quote from "./assets/quote-svgrepo-com.svg"
import p1 from "./assets/p1.svg"
import p2 from "./assets/p2.svg"
import p3 from "./assets/p3.svg"
import etoiles from "./assets/etoiles.svg"
import logo from "./assets/logo.svg"
import insta from "./assets/insta.svg"
import gmail from "./assets/gmail.svg"
import github from "./assets/github.svg"
import heart from "./assets/heart.svg"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from 'gsap/TextPlugin';
import CountUp from 'react-countup';
import ScrollTriggerComponent from 'react-scroll-trigger'

function Landing() {
    //animation/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            useEffect(() => {
                                                gsap.fromTo(".phone1",
                                                {opacity:5,
                                                x:500

                                                },{
                                                scrollTrigger:".phone1",
                                                x:-20,
                                                z:100,
                                                duration:4,
                                                opacity: 1,

                                            })
                                            gsap.registerPlugin(ScrollTrigger);
                                            gsap.fromTo(".map",
                                                {opacity:0,
                                                x:100,
                                                y:20

                                                },{
                                                scrollTrigger:".map",
                                                x:-6,
                                                y:-2,
                                                duration:4,
                                                opacity: 10,

                                            })
                                            //animation text
                                                gsap.registerPlugin(ScrollTrigger);
                                                gsap.registerPlugin(TextPlugin);
                                                gsap.to("#mytext", {
                                                duration: 5, // Durée de l'animation en secondes
                                                text: { value: " Building wealth ,one step at a time with Fundify " }, // Le texte à écrire
                                                //ease: "none", 
                                                // repeat:-1,
                                                //yoyo: true,
                                                // onStart: function() {
                                                //   document.getElementById('mytext').style.visibility = 'visible';
                                                // }
                                                  
                                                });
                                            

                                                //animation line
                                                const svg = document.querySelector('svg.linev')
                                                const path = svg ? svg.querySelector('line') : null;
                                                const scroll = () =>{
                                                    const distance = (window.scrollY - 800)
                                                    const totalDistance = svg.clientHeight - window.innerHeight
                                                    const percentage = distance /totalDistance
                                                    const pathLength = path.getTotalLength()
                                                    path.style.strokeDasharray = `${pathLength }`
                                                    path.style.strokeDashoffset =`${pathLength *(percentage)}`
                                                }
                                                
                                                scroll()
                                                window.addEventListener('scroll' , scroll)
                                                gsap.registerPlugin(ScrollTrigger);
                                                gsap.fromTo(
                                                "#subscribe-btn",
                                                { x: -500 },
                                                {
                                                    x: 170, // Le bouton se déplace vers la droite
                                                    duration: 2,
                                                    scrollTrigger: {
                                                    trigger: "#subscribe-section",
                                                    start: "top 90%", // Déclenchement de l'animation lorsque la section est à 80% du viewport
                                                    end: "top 60%",
                                                    toggleActions: "play none none reverse", // L'animation sera jouée lors du scroll et inversée lorsqu'on remonte
                                                    },
                                                   
                                                }
                                                );

                                            }, []);
//slide comments
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};
//counter up 
const [countOn, setCountOn]= useState(false);
                                           


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
return (
    <>
    <div className='bg-white'>
      <div className='flex mt-[10%] mx-[3%] '>
            <div className='flex flex-col  w-[50%]'>
                <div id='mytextdiv' className='mt-[2%] h-[60%]  '>
                    <span id='mytext' className=' xl: text-7xl popmed leading-relaxed mytext  '>
                               
                    </span>
                    <img src={argent} className='  argent size-[15%] inline-table mt-[-4%]' alt="" />
                </div>
                <div className='mt-[2%]'>
                    <p className='hidden xl:poplight text-xl  text-gray-400 leading-relaxed'>Fundify provides a comprehensive platform designed to simplify and enhance your financial journey. From intuitive budgeting tools to personalized investment advice.</p>
                </div>
                          
                <div className=" mt-[20%] xl: space-x-10 mt-[8%] ml-[10%]">
                    <button className="bg-yellow-500 text-white popbold text-lg py-4 px-20 rounded-full hover:bg-yellow-600 transition">
                      Get started
                    </button>
                    <button className="bg-white text-black popbold text-lg py-4 px-20 rounded-full border-2 border-black hover:bg-gray-100 transition">
                      Learn more
                    </button>
                </div>
            </div>
            <div>
                <div className='absolute'>
                  <img src={phone1} alt="" className='ml-[90%] phone1'/>
                </div>
                <div className='realtive '>
                  <svg className='size-[100%] ml-[10%]' id='myline' width="793" height="642" viewBox="0 0 793 642" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M111.654 2.56373C111.654 2.56373 -180.155 56.6829 189.483 57.54C559.121 58.3971 1192.08 206.44 437.113 338.318C-317.856 470.197 511.564 708.522 597.706 620.124C683.848 531.726 577.401 539.315 577.401 539.315" stroke="black" stroke-width="3.56664"/>
                  </svg>
                </div>
            </div>
            
      </div>
      <ScrollTriggerComponent onEnter={()=> setCountOn(true)} onExit={()=> setCountOn(false)}>
            <div className='bg-myyellowf grid grid-cols-4 gap-2 mt-[10%] py-20'>
                  <div className='flex flex-col items-center space-y-8 '>
                    <p className='popbold text-6xl mynumber text-white'>
                    {countOn && <CountUp start={0} end={20} duration={4} delay={0}/>} 
                    </p>
                    <p className='popreg text-white text-3xl'>Years experience</p>
                  </div>
                  <div className='flex flex-col items-center space-y-8 '>
                    <p className='popbold text-6xl mynumber text-white'>
                      +
                    {countOn && <CountUp start={0} end={5.6} duration={4} delay={0}/>} 
                      
                      </p>
                    <p className='popreg text-white text-3xl'>Total views</p>
                  </div>
                  <div className='flex flex-col items-center space-y-8 '>
                    <p className='popbold text-6xl mynumber text-white'>
                    {countOn && <CountUp start={0} end={4.8} duration={4} delay={0}/>} 
                      
                      </p>
                    <p className='popreg text-white text-3xl'>Avearge review</p>
                  </div>
                  <div className='flex flex-col items-center space-y-8 '>
                    <p className='popbold text-6xl mynumber text-white'>
                      +
                    {countOn && <CountUp start={0} end={180} duration={4} delay={0}/>} 
                    
                      </p>
                    <p className='popreg text-white text-3xl'>Professionnel teams</p>
                  </div>
            </div>
      </ScrollTriggerComponent>
      <div className='mt-[5%] ml-[4%]'>
        <div className='flex flex-row gap-4'>
              <p className='text-5xl popmed '>Partner</p>
              <img src={partner} alt="" className=''/>
              <svg className='mt-[1.4%] w-full' width="1090" height="4" viewBox="0 0 1054 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1.55533e-05" y1="1.5" x2="2054" y2="1.51093" stroke="#F0B716" stroke-width="3"/>
              </svg>
        </div>
        <div className='overflow-hidden w-full'>
          <div className='flex items-center justify-center gap-[10%] mt-[5%]  animate-scroll'>
            <img src={samsung} alt="" className='samsung' />
            <img src={amazon} className='mt-[1%] amazon' alt="" />
            <img src={apple} alt="" />
            <img src={unity} className='mt-[1%] amazon' alt="" />
            <img src={spotifay} alt="" className='mt-[1%]' />

          </div>
        </div>
        

        <svg className='mt-[5%] w-full' width="1090" height="4" viewBox="0 0 1054 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.55533e-05" y1="1.5" x2="2054" y2="1.51093" stroke="#F0B716" stroke-width="3"/>
        </svg>
        <svg className='absolute mx-[35%] mt-[3%] size-[13%]' width="237" height="146" viewBox="0 0 237 146" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_1583_6177)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M164.298 18.9196C175.654 17.9153 185.092 20.5008 194.585 23.5385C225.721 33.5188 238.145 53.3738 220.462 76.525C192.953 112.437 122.334 142.349 64.4106 139.567C51.5839 138.962 34.3414 139.151 20.6013 130.239C7.82031 121.953 6.8996 110.364 10.9164 99.043C14.9969 87.4396 24.2102 76.0956 31.735 68.6086C64.6413 35.9334 134.304 1.39472 201.782 6.91357C203.167 7.00956 204.466 6.39624 204.754 5.53517C205.041 4.6741 204.258 3.88373 202.969 3.77597C133.51 -1.90204 61.5942 33.4705 27.7249 67.0984C18.3648 76.4316 6.47351 91.5567 4.30497 105.972C2.85559 115.82 5.87827 125.339 16.9636 132.59C31.5599 142.088 49.9016 142.063 63.5185 142.713C123.317 145.589 196.374 114.758 224.721 77.6753C243.763 52.7877 230.565 31.4063 197.082 20.6808C186.87 17.3742 176.537 14.7002 164.212 15.7913C162.853 15.9121 161.773 16.7106 161.877 17.5643C161.885 18.4297 163.036 19.0287 164.298 18.9196Z" fill="#F7D99B"/>
        </g>
        <defs>
        <filter id="filter0_f_1583_6177" x="0.966797" y="0.171875" width="235.525" height="145.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_1583_6177"/>
        </filter>
        </defs>
        </svg>

        <div className='relative'>
        <p className='text-5xl popmed mt-[5%] mx-[40%] '>How it works ?</p>
        </div>
          <div className='mx-[6%] mt-[6%]'>
            <div className='grid grid-rows-3 gap-[10%] mt-[4%] absolute'>
                    <div className='flex flex-row gap-[1%] items-center'>
                            <svg className='size-[30%]' width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40.5" cy="40.5" r="40.5" fill="#373A40"/>
                            <path d="M34.6754 27.7824V24.1229H42.9643V56H38.9081V27.7824H34.6754Z" fill="white"/>
                            </svg>

                            <div className='flex flex-col items-center justify-center'>
                              <div className='flex flex-row items-center space-x-60'>
                                <img src={registre} alt="" />
                                <p className='popmed text-5xl'>Registre</p>

                              </div>
                              <div className='mt-[5%] w-[70%]'>
                              <p className='text-gray-400 popmed text-xl leading-relaxed '>Add a New Card to start managing your finances seamlessly. Store your card details securely, track your expenses, and keep your budgeting on point.</p>
                              </div>
                            </div>
                    </div>
                    <div className='flex flex-row gap-[1%] items-center'>
                            <svg className='size-[30%]' width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40.5" cy="40.5" r="40.5" fill="#373A40"/>
                            <path d="M29.2486 52.7814C32.9815 49.7833 35.9062 47.329 38.0225 45.4184C40.1388 43.4784 41.9171 41.465 43.3574 39.3781C44.8271 37.2617 45.5619 35.1895 45.5619 33.1614C45.5619 31.2508 45.0916 29.7518 44.151 28.6642C43.2398 27.5473 41.7555 26.9888 39.6979 26.9888C37.6992 26.9888 36.1413 27.6207 35.0244 28.8846C33.9368 30.1192 33.349 31.7799 33.2608 33.8668H29.3809C29.4984 30.5748 30.4978 28.0322 32.379 26.2392C34.2602 24.4463 36.6851 23.5498 39.6538 23.5498C42.6813 23.5498 45.0769 24.3875 46.8405 26.0629C48.6335 27.7383 49.53 30.0457 49.53 32.985C49.53 35.4247 48.7952 37.8055 47.3255 40.1276C45.8852 42.4203 44.2392 44.4484 42.3874 46.212C40.5356 47.9462 38.1695 49.9744 35.2889 52.2964H50.4559V55.6473H29.2486V52.7814Z" fill="white"/>
                            </svg>

                            <div className='flex flex-col items-center justify-center'>
                              <div className='flex flex-row items-center space-x-40'>
                               <p className='popmed text-5xl'>Add new card</p>
                                <img src={nouveau} alt="" />
                              </div>
                              <div className='mt-[5%] w-[70%]'>
                              <p className='text-gray-400 popmed text-xl leading-relaxed '>Add a New Card to start managing your finances seamlessly. Store your card details securely, track your expenses, and keep your budgeting on point.</p>
                              </div>
                            </div>
                    </div>
                    <div className='flex flex-row gap-[1%] items-center'>
                            <svg className='size-[30%]' width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40.5" cy="40.5" r="40.5" fill="#373A40"/>
                            <path d="M29.6454 32.1473C29.8512 29.4431 30.8946 27.3268 32.7758 25.7983C34.657 24.2699 37.0966 23.5057 40.0947 23.5057C42.0935 23.5057 43.813 23.8731 45.2533 24.6079C46.7229 25.3134 47.8252 26.2833 48.56 27.5179C49.3242 28.7524 49.7064 30.1486 49.7064 31.7064C49.7064 33.5288 49.1773 35.1013 48.1191 36.424C47.0903 37.7467 45.7383 38.5991 44.0628 38.9813V39.2017C45.9734 39.672 47.4872 40.5979 48.6041 41.9794C49.721 43.3609 50.2795 45.1686 50.2795 47.4024C50.2795 49.0779 49.8974 50.5916 49.1332 51.9437C48.369 53.2664 47.2226 54.3099 45.6942 55.0741C44.1657 55.8383 42.3286 56.2205 40.1829 56.2205C37.0672 56.2205 34.51 55.4121 32.5113 53.7955C30.5125 52.1495 29.3956 49.8274 29.1604 46.8293H33.0403C33.2461 48.5929 33.9662 50.0332 35.2007 51.1501C36.4353 52.267 38.0813 52.8255 40.1388 52.8255C42.1964 52.8255 43.7542 52.2964 44.8124 51.2383C45.8999 50.1507 46.4437 48.7545 46.4437 47.0497C46.4437 44.8452 45.7089 43.258 44.2392 42.288C42.7695 41.318 40.5503 40.833 37.5816 40.833H36.5675V37.4822H37.6257C40.3299 37.4528 42.3727 37.0119 43.7542 36.1595C45.1357 35.2777 45.8264 33.9256 45.8264 32.1032C45.8264 30.5454 45.312 29.2962 44.2833 28.3556C43.2839 27.415 41.8436 26.9447 39.9625 26.9447C38.1401 26.9447 36.6704 27.415 35.5535 28.3556C34.4365 29.2962 33.7752 30.5601 33.5694 32.1473H29.6454Z" fill="white"/>
                            </svg>
                            <div className='flex flex-col items-center justify-center'>
                              <div className='flex flex-row items-center space-x-60'>
                                <img src={succes} alt="" />
                                <p className='popmed text-5xl'>Success</p>

                              </div>
                              <div className='mt-[5%] w-[70%]'>
                              <p className='text-gray-400 popmed text-xl leading-relaxed '>Add a New Card to start managing your finances seamlessly. Store your card details securely, track your expenses, and keep your budgeting on point.</p>
                              </div>
                            </div>
                    </div>
            </div>
            <svg className='relative ml-[20%] linev' width="8" height="1240" viewBox="0 0 6 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4.00781" y1="1099.07" x2="4.00781" y2="0.934025" stroke="#F0B716" stroke-width="7"/>
            </svg>
          </div>
          <div className='flex flex-col items-center justify-center mt-[5%]'>
              <p className='text-5xl popmed '>Feel the best <span className='text-myyellowf'>experience</span> with our features</p>
              <svg className='mx-[30%] mt-[1%]' width="701" height="41" viewBox="0 0 701 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M297.372 3.8421C264.478 5.15876 231.969 6.77771 200.269 8.54764C155.392 11.0514 110.534 13.6416 65.9454 17.7427C51.9099 19.0377 37.6568 19.8579 23.7091 21.4767C14.9537 22.4912 3.34411 23.9372 1.82051 24.2393C1.0236 24.412 0.675935 24.6713 0.563595 24.7576C-0.226293 25.362 -0.0821673 25.9445 0.363681 26.3978C0.542722 26.5921 0.995464 27.0671 2.25226 27.1319C86.3034 31.5567 172.25 22.9229 256.403 22.0163C402.339 20.4623 552.699 26.6354 697.477 40.1042C698.74 40.2121 699.969 39.6723 700.145 38.8737C700.355 38.0967 699.443 37.3412 698.179 37.2333C553.156 23.743 402.55 17.5482 256.333 19.1238C177.906 19.9656 97.9305 27.5419 19.3946 24.9518C21.199 24.736 22.9685 24.52 24.5834 24.3258C38.4749 22.7069 52.6683 21.9084 66.6475 20.6133C111.141 16.5122 155.908 13.9221 200.725 11.4399C256.333 8.33172 314.363 5.65522 372.85 4.40332C393.773 4.59758 414.626 4.79193 435.479 5.02936C480.591 5.54738 525.913 7.05831 570.919 9.08725C584.47 9.7132 598.021 10.3607 611.572 10.9219C616.066 11.1161 627.651 11.6772 629.266 11.6341C631.267 11.5909 631.653 10.5549 631.688 10.3823C631.793 9.99375 631.723 9.45411 630.74 9.00083C630.634 8.93608 630.003 8.7201 628.598 8.59059C546.766 0.949676 459.387 -0.323609 372.921 1.51107C281.715 0.712447 190.158 0.366936 99.1839 0C97.8815 0 96.8177 0.64763 96.8072 1.44626C96.8002 2.24488 97.8498 2.89253 99.1522 2.91412C165.025 3.17313 231.232 3.432 297.372 3.8421Z" fill="#FED98B" fill-opacity="0.83"/>
              </svg>

          </div>
          
          <div className='grid grid-cols-3 gap-16 mr-[4%]'>
              <div className='rounded-3xl bg-gray-200 mt-[8%] shadow-2xl '>
                  <img src={exp1} alt="" className='ml-[5%] mt-[5%] size-[17%]' />
                  <p className='text-4xl popmed ml-[10%] mt-[6%] '>Secure Data Encryption</p>
                  <p className='text-lg popmed text-gray-500 mt-[7%] mx-[8%]'>Your data is protected with the highest level of security, ensuring that your financial information remains safe and private.</p>
                  <button className=" text-black popbold text-lg py-3 px-10 rounded-full border-2 border-black hover:bg-gray-100 transition mt-[28%] ml-[60%]">
                        Learn more
                  </button>            
              </div>
              <div className='rounded-3xl bg-myyellowf mt-[8%] shadow-2xl'>
                  <img src={exp2} alt="" className='ml-[5%] mt-[5%] size-[17%]' />
                  <p className='text-4xl popmed ml-[10%] mt-[6%] '>24/7 Support</p>
                  <p className='text-lg popmed text-gray-500 mt-[7%] mx-[8%]'>Access our customer support team anytime for help with using the platform or understanding your finances better.</p>
                  <img src={visa} alt="" className='ml-[27%] '/>           
              </div>
              <div className='rounded-3xl bg-gray-200 mt-[8%] row-span-2 shadow-2xl'>
                  <img src={exp3} alt="" className='ml-[5%] mt-[%] size-[17%]' />
                  <p className='text-4xl popmed ml-[10%] mt-[6%] '> Integration with Multiple Banks</p>
                  <p className='text-lg popmed text-gray-500 mt-[7%] mx-[8%] leading-9'> With all your financial data in one place, you can easily monitor transactions, track spending, and manage your finances more effectively. Fundify's seamless integration ensures that you stay on top of your financial situation, making informed decisions with ease. Say goodbye to juggling multiple apps and platforms—Fundify simplifies your financial life by bringing everything together in one secure, user-friendly dashboard.mplete financial overview in one place.</p>
                  <img src={map} alt="" className='ml-[14%] mt-[5%] map'/>           
              </div>
              <div className='rounded-3xl bg-gray-200  col-span-2 shadow-2xl'>
                  <img src={exp4} alt="" className='ml-[%] mt-[3%] size-[17%]' />
                  <p className='text-4xl popmed ml-[10%] mt-[2%] '>Advanced Reporting & Analytics</p>
                  <p className='text-lg popmed text-gray-500 mx-[4%] mt-[3%] leading-relaxed'>Dive deep into your finances with detailed reports and analytics, helping you identify trends and opportunities for improvement.</p>
                  <button className=" text-white bg-myyellowf popbold text-lg py-4 px-10 rounded-full  hover:bg-gray-100 transition  ml-[80%] mt-[6%]">
                        Get started
                  </button>  
              </div>
          </div>
          <div className='flex flex-col items-center justify-center mt-[5%]'>
              <p id='pricing' className='text-5xl popmed '>Pricing</p>
              <p className='text-4xl popmed text-gray-700 mt-[3%]  '>Choose <span className='text-myyellowf'>your</span> plan</p>
              <svg className='mx-[30%] mt-[1%]' width="701" height="41" viewBox="0 0 701 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M297.372 3.8421C264.478 5.15876 231.969 6.77771 200.269 8.54764C155.392 11.0514 110.534 13.6416 65.9454 17.7427C51.9099 19.0377 37.6568 19.8579 23.7091 21.4767C14.9537 22.4912 3.34411 23.9372 1.82051 24.2393C1.0236 24.412 0.675935 24.6713 0.563595 24.7576C-0.226293 25.362 -0.0821673 25.9445 0.363681 26.3978C0.542722 26.5921 0.995464 27.0671 2.25226 27.1319C86.3034 31.5567 172.25 22.9229 256.403 22.0163C402.339 20.4623 552.699 26.6354 697.477 40.1042C698.74 40.2121 699.969 39.6723 700.145 38.8737C700.355 38.0967 699.443 37.3412 698.179 37.2333C553.156 23.743 402.55 17.5482 256.333 19.1238C177.906 19.9656 97.9305 27.5419 19.3946 24.9518C21.199 24.736 22.9685 24.52 24.5834 24.3258C38.4749 22.7069 52.6683 21.9084 66.6475 20.6133C111.141 16.5122 155.908 13.9221 200.725 11.4399C256.333 8.33172 314.363 5.65522 372.85 4.40332C393.773 4.59758 414.626 4.79193 435.479 5.02936C480.591 5.54738 525.913 7.05831 570.919 9.08725C584.47 9.7132 598.021 10.3607 611.572 10.9219C616.066 11.1161 627.651 11.6772 629.266 11.6341C631.267 11.5909 631.653 10.5549 631.688 10.3823C631.793 9.99375 631.723 9.45411 630.74 9.00083C630.634 8.93608 630.003 8.7201 628.598 8.59059C546.766 0.949676 459.387 -0.323609 372.921 1.51107C281.715 0.712447 190.158 0.366936 99.1839 0C97.8815 0 96.8177 0.64763 96.8072 1.44626C96.8002 2.24488 97.8498 2.89253 99.1522 2.91412C165.025 3.17313 231.232 3.432 297.372 3.8421Z" fill="#FED98B" fill-opacity="0.83"/>
              </svg>          </div>
          <div className='flex flex-row items-center justify-center mt-[4%] gap-[5%]'>
              <div className='flex flex-col gap-4 items-center justify-center bg-white border rounded-2xl py-[5%] px-[5%]  hover:bg-gray-100 shadow-2xl '>
                  <p className='text-3xl popmed'>Basic</p>
                  <p className='text-5xl popbold '> <span className='text-myyellowf'>€</span>0.00 <span className='text-gray-400 text-2xl popreg'>/month</span></p>
                  <p className='text-2xl popreg'>Free account</p>
                  <div className='mt-[10%] flex flex-col gap-3 '>
                        <div className='flex flex-row gap-4'>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Virtual Cards</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Complete Framework</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>High rated Support</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Additional elements</p>
                        </div>
                  </div>
                  <button className="mt-[20%] bg-gray-100 text-black popbold text-lg py-4 px-20 rounded-full   hover:bg-gray-200 transition">
                      Open account
                    </button>
                 
              </div>
              <div className='flex flex-col gap-4 items-center justify-center bg-black border rounded-2xl py-[5%] px-[5%] hover:scale-105 '>
                  <p className='text-3xl popmed text-white'>Standard</p>
                  <p className='text-5xl popbold text-white '> <span className='text-myyellowf'>€</span>8.90 <span className='text-gray-400 text-2xl popreg'>/month</span></p>
                  <p className='text-2xl popreg'>All free NE features</p>
                  <div className='mt-[10%] flex flex-col gap-3 text-white'>
                        <div className='flex flex-row gap-4'>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Travel assurance</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Cryptocurrency</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Partner discounts</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Free payments worldwide</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Spendning statistics</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Shared sub-account</p>
                        </div>
                  </div>
                  <button className="mt-[20%] bg-white text-black popbold text-lg py-4 px-20 rounded-full   hover:bg-gray-200 transition">
                      Open account
                    </button>
                 
              </div>
              <div className='flex flex-col gap-4 items-center justify-center bg-white border rounded-2xl py-[5%] px-[5%]  hover:bg-gray-100  shadow-2xl '>
                  <p className='text-3xl popmed'>Premium</p>
                  <p className='text-5xl popbold '> <span className='text-myyellowf'>€</span>14.90 <span className='text-gray-400 text-2xl popreg'>/month</span></p>
                  <p className='text-2xl popreg'>All free NE features</p>
                  <div className='mt-[10%] flex flex-col gap-3 '>
                        <div className='flex flex-row gap-4'>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Stoks</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Cryptocurrency</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Travel instructions</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p className='popmed text-xl'>Phone instructions</p>
                        </div>
                  </div>
                  <button className="mt-[20%] bg-gray-100 text-black popbold text-lg py-4 px-20 rounded-full   hover:bg-gray-200 transition">
                      Open account
                    </button>
                 
              </div>     
          </div>
          <div className='flex flex-col items-center justify-center mt-[5%]'>
              <p className='text-5xl popmed '>Satisfied custumors are our best Ads</p>
              <svg className='mx-[30%] mt-[1%]' width="701" height="41" viewBox="0 0 701 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M297.372 3.8421C264.478 5.15876 231.969 6.77771 200.269 8.54764C155.392 11.0514 110.534 13.6416 65.9454 17.7427C51.9099 19.0377 37.6568 19.8579 23.7091 21.4767C14.9537 22.4912 3.34411 23.9372 1.82051 24.2393C1.0236 24.412 0.675935 24.6713 0.563595 24.7576C-0.226293 25.362 -0.0821673 25.9445 0.363681 26.3978C0.542722 26.5921 0.995464 27.0671 2.25226 27.1319C86.3034 31.5567 172.25 22.9229 256.403 22.0163C402.339 20.4623 552.699 26.6354 697.477 40.1042C698.74 40.2121 699.969 39.6723 700.145 38.8737C700.355 38.0967 699.443 37.3412 698.179 37.2333C553.156 23.743 402.55 17.5482 256.333 19.1238C177.906 19.9656 97.9305 27.5419 19.3946 24.9518C21.199 24.736 22.9685 24.52 24.5834 24.3258C38.4749 22.7069 52.6683 21.9084 66.6475 20.6133C111.141 16.5122 155.908 13.9221 200.725 11.4399C256.333 8.33172 314.363 5.65522 372.85 4.40332C393.773 4.59758 414.626 4.79193 435.479 5.02936C480.591 5.54738 525.913 7.05831 570.919 9.08725C584.47 9.7132 598.021 10.3607 611.572 10.9219C616.066 11.1161 627.651 11.6772 629.266 11.6341C631.267 11.5909 631.653 10.5549 631.688 10.3823C631.793 9.99375 631.723 9.45411 630.74 9.00083C630.634 8.93608 630.003 8.7201 628.598 8.59059C546.766 0.949676 459.387 -0.323609 372.921 1.51107C281.715 0.712447 190.158 0.366936 99.1839 0C97.8815 0 96.8177 0.64763 96.8072 1.44626C96.8002 2.24488 97.8498 2.89253 99.1522 2.91412C165.025 3.17313 231.232 3.432 297.372 3.8421Z" fill="#FED98B" fill-opacity="0.83"/>
              </svg>
          </div>
          <div className="slider-container mt-[5%] overflow-hidden">
            <Slider {...settings}>
                <div className='flex flex-row items-center justify-center  '>
                    <img src={quote} alt="" className='size-[6%]'/>
                    <div className='mx-[4%]'>
                    <p className='popmed text-xl leading-[200%] mt-[3%]'>"Fundify has transformed the way I manage my finances. The platform is intuitive and has made it easy to stay on top of my investments."</p>
                    </div>
                    <div className='flex flex-row mt-[8%] '>
                        <img src={p1} alt="" className='size-[11%] '/>
                        <div className='flex flex-col gap-[2%] '>
                            <p className='popmed ml-[3%]'>Elon Bouali</p>
                            <p className='popreg text-gray-400 ml-[3%]'>Founder of Tesla</p>
                            <img src={etoiles} alt="" className='size-[25%] ' />

                        </div>
                    </div>
                </div>
                <div className='flex flex-row  '>
                    <img src={quote} alt="" className='size-[6%]'/>
                    <div className='mx-[4%]'>
                    <p className='popmed text-xl leading-[200%] mt-[3%]'>"Fundify has transformed the way I manage my finances. The platform is intuitive and has made it easy to stay on top of my investments."</p>
                    </div>
                    <div className='flex flex-row mt-[8%] '>
                        <img src={p2} alt="" className='size-[11%] '/>
                        <div className='flex flex-col gap-[2%] '>
                            <p className='popmed ml-[3%]'>Sarah Johnson</p>
                            <p className='popreg text-gray-400 ml-[3%]'>Founder of Tesla</p>
                            <img src={etoiles} alt="" className='size-[25%] ' />

                        </div>
                    </div>
                </div>
                <div className='flex flex-row  '>
                    <img src={quote} alt="" className='size-[6%]'/>
                    <div className='mx-[4%]'>
                    <p className='popmed text-xl leading-[200%] mt-[3%]'>"Fundify has transformed the way I manage my finances. The platform is intuitive and has made it easy to stay on top of my investments."</p>
                    </div>
                    <div className='flex flex-row mt-[8%] '>
                        <img src={p3} alt="" className='size-[11%] '/>
                        <div className='flex flex-col gap-[2%] '>
                            <p className='popmed ml-[3%]'>Michael Thompson</p>
                            <p className='popreg text-gray-400 ml-[3%]'>Founder of Tesla</p>
                            <img src={etoiles} alt="" className='size-[25%] ' />

                        </div>
                    </div>
                </div>
                <div className='flex flex-row  '>
                    <img src={quote} alt="" className='size-[6%]'/>
                    <div className='mx-[4%]'>
                    <p className='popmed text-xl leading-[200%] mt-[3%]'>"Fundify has transformed the way I manage my finances. The platform is intuitive and has made it easy to stay on top of my investments."</p>
                    </div>
                    <div className='flex flex-row mt-[8%]  '>
                        <img src={p1} alt="" className='size-[11%] '/>
                        <div className='flex flex-col gap-[2%] '>
                            <p className='popmed ml-[3%]'>Elon Bouali</p>
                            <p className='popreg text-gray-400 ml-[3%]'>Founder of Tesla</p>
                            <img src={etoiles} alt="" className='size-[25%] ' />

                        </div>
                    </div>
                </div>
            </Slider>
          </div>
          <svg className='mx-[30%] mt-[5%]' width="701" height="41" viewBox="0 0 701 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M297.372 3.8421C264.478 5.15876 231.969 6.77771 200.269 8.54764C155.392 11.0514 110.534 13.6416 65.9454 17.7427C51.9099 19.0377 37.6568 19.8579 23.7091 21.4767C14.9537 22.4912 3.34411 23.9372 1.82051 24.2393C1.0236 24.412 0.675935 24.6713 0.563595 24.7576C-0.226293 25.362 -0.0821673 25.9445 0.363681 26.3978C0.542722 26.5921 0.995464 27.0671 2.25226 27.1319C86.3034 31.5567 172.25 22.9229 256.403 22.0163C402.339 20.4623 552.699 26.6354 697.477 40.1042C698.74 40.2121 699.969 39.6723 700.145 38.8737C700.355 38.0967 699.443 37.3412 698.179 37.2333C553.156 23.743 402.55 17.5482 256.333 19.1238C177.906 19.9656 97.9305 27.5419 19.3946 24.9518C21.199 24.736 22.9685 24.52 24.5834 24.3258C38.4749 22.7069 52.6683 21.9084 66.6475 20.6133C111.141 16.5122 155.908 13.9221 200.725 11.4399C256.333 8.33172 314.363 5.65522 372.85 4.40332C393.773 4.59758 414.626 4.79193 435.479 5.02936C480.591 5.54738 525.913 7.05831 570.919 9.08725C584.47 9.7132 598.021 10.3607 611.572 10.9219C616.066 11.1161 627.651 11.6772 629.266 11.6341C631.267 11.5909 631.653 10.5549 631.688 10.3823C631.793 9.99375 631.723 9.45411 630.74 9.00083C630.634 8.93608 630.003 8.7201 628.598 8.59059C546.766 0.949676 459.387 -0.323609 372.921 1.51107C281.715 0.712447 190.158 0.366936 99.1839 0C97.8815 0 96.8177 0.64763 96.8072 1.44626C96.8002 2.24488 97.8498 2.89253 99.1522 2.91412C165.025 3.17313 231.232 3.432 297.372 3.8421Z" fill="#FED98B" fill-opacity="0.83"/>
            </svg>
            <div className='grid grid-cols-2 mt-[5%]'>
                <div className='flex flex-col'>
                    <p className='text-7xl popmed leading-[150%]'>Got A Questions <span className='text-myyellowf'>for</span> Fundify ?</p>
                    <p className='popreg text-gray-500 text-xl w-[78%] mt-[3%] leading-[190%] '>"We’re here to help! Whether you’re curious about how Fundify works, don’t hesitate to reach out. Our support team is ready to provide you with the answers you need to make the most of your financial journey."</p>
                    <div id="subscribe-section" className="">
                        <div class="flex w-[70%] text-xl border rounded-3xl mt-[5%] ">
                            <input
                            type="email"
                            placeholder="Enter your email"
                             className="popreg py-[2%] px-[3%] w-[50%] text-xl   " 
                  
                            />
                           <button id="subscribe-btn" className="ml-4 bg-myyellowf text-white popmed py-[2%] px-[7%] rounded-full text-xl">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                  <p className='text-2xl popmed leading-[150%] mt-[5%]'>Maybe yous question have been answered check this out </p>
                  <div className='flex flex-row items-center mt-[5%] gap-[3%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                         </svg>
                         <p className='text-2xl popreg leading-[150%] '>What is Fundify ? </p>

                  </div>
                  <div className='flex flex-row items-center mt-[5%] gap-[3%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                         </svg>
                         <p className='text-2xl popreg leading-[150%] '>Are there other features ? </p>

                  </div>
                  <div className='flex flex-row items-center mt-[5%] gap-[3%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                         </svg>
                         <p className='text-2xl popreg leading-[150%] '>How can i get this service  ? </p>

                  </div>

                </div>

            </div>  

      </div>

      {/* footer */}
      <div className='mt-[5%] bg-gray-200  '>
            <div className='flex flex-row gap-[10%] '>
              <div className='flex flex-col items-center mt-[3%] '>
                  <img src={logo} alt="Logo" className="mr-[3%] ml-[2%] size-[35%] " />
                  <p className='popmed text-md w-[75%] leading-[250%]'>"Fundify simplifie la gestion financière en offrant des outils intuitifs pour budgétiser."</p>
                  

              </div>
              <div className='flex flex-col  items-center mt-[3%]   '>
                  <p className='popbold text-lg  '>Our services</p>
                  <p className='popmed text-md mt-[20%]  '>Help center</p>
                  <p className='popmed text-md mt-[10%]  '>FAQ</p>
                  <p className='popmed text-md mt-[10%]  '>Investation</p>
                  <p className='popmed text-md mt-[10%]  '>Transaction</p>
              </div>
              <div className='flex flex-col items-center mt-[3%]  '>
                  <p className='popbold text-lg '>Company</p>
                  <p className='popmed text-md mt-[20%]  '>About us</p>
                  <p className='popmed text-md mt-[10%]  '>Career</p>
                  <p className='popmed text-md mt-[10%]  '>Management</p>
                  <p className='popmed text-md mt-[10%]  '>Blog</p>
              </div>
              <div className='flex flex-col items-center mt-[3%]  '>
                  <p className='popbold text-lg '>Get the last information from us </p>
                  <div class="flex flex-row border rounded-3xl mt-[5%] bg-white">
                      <input
                      type="email"
                      placeholder="Enter your email"
                      className="popreg py-[2%] px-[3%] text-lg   " 
            
                      />
                    <button className=" bg-myyellowf text-white popmed py-[2%] px-[7%] rounded-full text-lg">Subscribe</button>
                  </div>
                  <p className='popbold text-lg mt-[10%] '>Contact us </p>
                  <div className="flex flex-row gap-4 items-center mb-0 mt-[4%] ">
                                <img src={insta} alt="" className="size-8"/>
                                <img src={github} alt="" className="size-12"/>
                                <img src={gmail} alt="" className="size-9" />
                  </div>
                  

              </div>
            

            </div>
            <div className="flex flex-row gap-6 items-center justify-center mt-[7%] ">
                                    <p className="popmed text-xl ">Made with</p>
                                    <img src={heart} alt="" className="size-8" />
                                    <p className="popmed text-xl ">by rima bli</p>

                            </div>      
      </div>
      
      </div>
    </>
  )
}

export default Landing
