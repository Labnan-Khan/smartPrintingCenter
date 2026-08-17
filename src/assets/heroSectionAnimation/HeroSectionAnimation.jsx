import React from 'react'
import './heroSectionAnimation.css'
import { FaBox, FaCopy, FaRegHeart, FaShieldAlt, FaShippingFast } from 'react-icons/fa'
import { LuCookingPot } from 'react-icons/lu'
import { RiSeedlingLine } from 'react-icons/ri'
import { GiMountaintop } from 'react-icons/gi'
import { BsBookmarkPlus } from 'react-icons/bs'
import { ImPrinter } from 'react-icons/im'
import { MdLocalShipping } from 'react-icons/md'
import { BiBox } from 'react-icons/bi'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
function HeroSectionAnimation() {
    const heroanimationlist = [
        {icon:ImPrinter, heading:"Wellness", para:"Rich in healthy fats that support a balanced lifestyle."},
        {icon:MdLocalShipping, heading:"Versatility", para:"Perfect for cooking, roasting, dipping, and salads."},
        {icon:FaBox, heading:"Trust", para:"Every bottle reflects our commitment to quality and purity."},
        {icon:FaCopy, heading:"Farm Fresh", para:"Harvested directly from carefully selected olive groves."},
        {icon:VscWorkspaceTrusted , heading:"Nutrient Rich", para:"Naturally contains vitamins and healthy monounsaturated fats."},
        {icon:FaShippingFast , heading:"Origin", para:"Sourced from carefully selected olive groves."},
    ]
  return (
    <div className='herosectionAnimation'>
        <div className='homepageheroFooter'>
            <div className='heroSectionFooter'>

                {[...heroanimationlist,...heroanimationlist].map((item,index)=>{
                    const Icon = item.icon
                   return( 
                        <div>
                            <span><item.icon /></span>
                            <h3>{item.heading}</h3>
                            {/* <p>{item.para}</p> */}
                        </div>
                    
                   )
                })}

            </div>
        </div>
    </div>
  )
}

export default HeroSectionAnimation
