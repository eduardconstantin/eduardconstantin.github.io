import React from 'react'
import {motion} from 'framer-motion'
import NumberColumn from './NumberColumn';

function formatNumber(number = 0, decimal = 0) {
   return parseFloat(Math.max(number, 0)).toFixed(decimal).split('').reverse();
}

export default function Counter({numberValue, decimalDigits}) {
   const numArray = new Intl.NumberFormat().format(numberValue).split('').reverse();
   // const numArray = formatNumber(numberValue, decimalDigits);
   const digitCont = {
      hidden: { opacity: 0 },
      show: {
         opacity: 0.4,
         transition: {
           staggerChildren: 1
         }
       }
   }
   return (
      <motion.div layout="position" variants={digitCont} initial="hidden" animate="show" className="counterView">
         %{numArray.map((no, i) => <NumberColumn key={`d${i}`} digit={no}/>)}
      </motion.div>
   )
}