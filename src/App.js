import styled from "@emotion/styled";
import { motion, AnimateSharedLayout, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import React, { useState } from "react";
import Something from "./Something";


function App() {
  const [isOpen, setIsOpen] = useState(false);


  const ul = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  const li = { hidden: { x: -10, opacity: 0 }, visible: { opacity: 1 } }
  return (
    <>
      {/* <div style={{ display: "flex" }}>
        <AnimateSharedLayout >

          <Card layoutId="card" onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.1 }}>
            Kapalı Kart.
            </Card>

          <AnimatePresence>
            {
              isOpen &&
              <ModalContainer>
                <Card2 animate={{ borderRadius: "20px" }} layoutId="card" onClick={() => setIsOpen(!isOpen)} transition={{ duration: 0.5 }}>Açık Kart.</Card2>
              </ModalContainer>
            }
          </AnimatePresence>
        </AnimateSharedLayout>
      </div> */}
      <div>
        <motion.ul variants={ul} initial="hidden" animate="visible">
          <motion.li variants={li}>MOTION</motion.li>
          <motion.li variants={li}>MOTION</motion.li>
          <motion.li variants={li}>MOTION</motion.li>
        </motion.ul>
        <Something />
      </div>
    </>
  );
}


const Card = styled(motion.div)`
border:1px solid lightgray;
height:200px;
width:200px;
overflow:hidden;
background-color:#fff;
box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);

`

const Card2 = styled(motion.div)`
border:1px solid lightgray;
height:300px;
background-color:#fff;
width:300px;
overflow:hidden;
box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);

`
const ModalContainer = styled.div`position:absolute;
top:0;left:0;right:0;bottom:0;
background-color: rgba(0,0,0,.05);
display:flex;
justify-content:center;
align-items:center;
`

export default App;
