import React, { useEffect, useState } from 'react'
import './home.css'
import HeroSectionAnimation from '../heroSectionAnimation/HeroSectionAnimation'
import { TbBrandAirtable } from 'react-icons/tb';
import { CiShop, CiTimer } from 'react-icons/ci';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';
import { PiShippingContainer } from 'react-icons/pi';
import { LiaShippingFastSolid } from 'react-icons/lia';
import Testimonial from '../testimonial/Testimonial';
import { FaLocationDot } from 'react-icons/fa6';
import { MdMiscellaneousServices } from 'react-icons/md';

function Home() {
        const [storyProgress, setStoryProgress] = useState(0);
    useEffect(() => {
    const handleScroll = () => {
        const section = document.querySelector(".outStorySection");

        if (!section) return;

        const rect = section.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        // Start animation when section enters viewport
        const startPoint = windowHeight * 0.75;

        // How far user has moved through the section
        const progress =
            ((startPoint - rect.top) /
                (rect.height + startPoint - windowHeight * 0.2)) *
            100;

        const finalProgress = Math.max(
            0,
            Math.min(100, progress)
        );

        setStoryProgress(finalProgress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

    const words = ["Shiping.", "Printing.", "Packing."];
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 80 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className='homepage'>

      <div className='heroSection'>
        <div className='herosectionTop'>
            <div className='herosecLeftSide'>
                <h1>We Handle Your {text} <span className="cursor">|</span></h1>
                {/* <h1>{text} <span className="cursor">|</span></h1> */}
                <p>Smart Postal Centers makes shipping, printing, malling, and business services simple - all under one roof.</p>
                <div>
                    <button><span><MdMiscellaneousServices /></span>Our Servies</button>
                    <button><span><FaLocationDot /></span>Our Location</button>
                </div>
            </div>
            <div className='herosecRightSide'>

            </div>
        </div>
        <div className='herobottom'>
            <HeroSectionAnimation/>
        </div>
      </div>


      <div className='aboutOurStory'>
            <h1>Our Services</h1>
            <p>Everything You Need. All in One Place.</p>
            <div className='outStorySection'>


                <div className='storyitemDetailSection'>
                    <h2>We Are Packing and Shipping Experts</h2>
                    <p>We are is your FedEx shipping store at Lake of the Ozarks. Expert service, meticulous care, and quality packaging materials are standard at our Osage Beach loction. Not only can we pack your shipments for you, we also have direct access to FedEx, DHL, Smart Freight, and the united Stated Postal Service (USPS), giving you a wide range of shipping solutions. Your package will arrive safely and on-time when you ship with us. We take the steps to be sure your items make it through carrier handling with strong cartons and plenty of bubble wrap, packing peanuts, foam, or support braces if needed. For your shipping needs at the Lake of Ozarks, you can trust the team at Smart Printing Centers.</p>
                </div>
                <div className='storyitemProgressbarSection' style={{"--progress": `${storyProgress}%`}}>
                    <span><TbBrandAirtable /></span>
                    <span><TbBrandAirtable /></span>
                    <span><TbBrandAirtable /></span>
                    <span><TbBrandAirtable /></span>
                    <span><TbBrandAirtable /></span>
                    <span><TbBrandAirtable /></span>
                </div>
                <div className='storyitemImgSection'></div>



                <div className='storyitemImgSection'></div>
                <div className='storyitemDetailSection'>
                    <h2>Our Quality Equipment Makes Great Copies</h2>
                    <p>The copiers in our hi tech copy center can produce any of the following for you:</p>
                    <ul>
                        <li>B&W Copies</li>
                        <li>binding</li>
                        <li>Booklets</li>
                        <li>Collating</li>
                        <li>Padding</li>
                        <li>Stapling</li>
                        <li>Folding</li>
                        <li>Color Copies</li>
                        <li>Blue Prints</li>
                        <li>Binding</li>
                        <li>Laminating</li>
                        <li>Stapling</li>
                    </ul>
                    
                </div>


                <div className='storyitemDetailSection'>
                    <h2>Offer Lots Of Full Color Printing Options</h2>
                    <p>We can produce great marketing materials to help your company succeed.</p>
                    <ul>
                        <li>Business Cards</li>
                        <li>Letterhead</li>
                        <li>Postcards</li>
                        <li>Flyers</li>
                        <li>Brochures</li>
                        <li>Presentations and Manuals</li>
                        <li>Menus</li>
                        <li>Table Tents</li>
                        <li>Calendars</li>
                    </ul>
                </div>
                <div className='storyitemImgSection'></div>



                <div className='storyitemImgSection'></div>
                <div className='storyitemDetailSection'>
                    <h2>Our Banners Help Your Visibility</h2>
                    <p>We offer fast turn around on your custom orders. We have delivery service available. We also offer state of the art wide format digital printing which includes:</p>
                    <ul>
                        <li>Full Color Banners one or two sides</li>
                        <li>Indoor / outdoor</li>
                        <li>Retractable Banners and Stands</li>
                    </ul>
                </div>

                <div className='storyitemDetailSection'>
                    <h2>We Make Signs of All Kinds</h2>
                    <p>We offer fast turn around on your custom orders. We have delivery service available. We also offer state of the art wide format digital printing which includes:</p>
                    <ul>
                        <li>Yard Signs</li>
                        <li>Ameren UE Dock Address Signs</li>
                        <li>Real Estate Signs</li>
                        <li>Property Signs</li>
                        <li>Parking Signs</li>
                    </ul>
                </div>
                <div className='storyitemImgSection'></div>
                


                <div className='storyitemImgSection'></div>
                <div className='storyitemDetailSection'>
                    <h2>Ask Us About Our Full Graphics Capabilities</h2>
                    <p>Our designers can produce graphics for any of our products. We can design any of these great products for you:</p>
                    <ul>
                        <li>Window Graphics</li>
                        <li>Wall Graphics</li>
                        <li>Trade Show Graphics</li>
                        <li>Floor Graphics</li>
                        <li>Custom Mounting and Framing</li>
                        <li>Boat Names and Numbers</li>
                        <li>Wrapped Canvas</li>
                    </ul>
                </div>
                
            </div>
        </div>

      

        <div className='whyUs'>
            <div className='whyUsSection'>
                <div className='whyUsimg'></div>
                <div className='whyUsRightSection'>

                    <h1>Why Smart Postal Centers?</h1>

                    <div>
                        <span><CiShop /></span>
                        <h5>One Stop. Multiple Services.</h5>
                        <p>Prefecdonal Recrice asses provdes arenchord Prefecdonal Recrice asses provdes arenchord Prefecdonal Recrice asses provdes arenchord</p>
                    </div>

                    <div>
                        <span><FaHandHoldingUsd /></span>
                        <h5>One Stop. Multiple Services.</h5>
                        <p>Prefecdonal Recrice asses provdes arenchord Prefecdonal Recrice asses provdes arenchord Prefecdonal Recrice asses provdes arenchord</p>
                    </div>

                    <div>
                        <span><CiTimer /></span>
                        <h5>One Stop. Multiple Services.</h5>
                        <p>Prefecdonal Recrice asses provdes arenchord Prefecdonal Recrice asses provdes arenchord Prefecdonal Recrice asses provdes arenchord</p>
                    </div>

                </div>
            </div>

        </div>

        <div className='timeLine'>
            <h1>From Your Hands to Their Door.</h1>
            {/* <p>From Your Hands to Their Door.</p> */}
            <div className='timelineSection'>

                <div>
                    <span><GoPackage /></span>
                    <p>PACK</p>
                </div>

                <div>
                    <span><LiaShippingFastSolid /></span>
                    <p>SHIP</p>
                </div>

                <div>
                    <span><IoLocationOutline /></span>
                    <p>TRACK</p>
                </div>

                <div>
                    <span><PiShippingContainer /></span>
                    <p>DELIVER</p>
                </div>

            </div>

            <div className='timelineLocationSection'>
                <div className='locationleftside'>
                    <h3>Your Local Partner, Just Around the Corner.</h3>
                    <p>Smost Pecked Contine mins difoolse pontiog, netting, and boonaas cennote stnple -el under one root.</p>
                    <button>Find Your Nearest Center</button>
                </div>
                <div className='locationImg'></div>
            </div>

        </div>

        <Testimonial/>

        

        


      
    </div>
  )
}

export default Home
