import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";


import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion"; // to make our framer motion animation work
const Home = () => {
    const snap = useSnapshot(state) //one current snapsort of that current state
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img src="./logo.png"
                            alt="logo"
                            className="w-8 h-8 object-contain" />
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                LET's <br className="xl:block hidden" /> DO IT
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Customize your unique and attractive shirt with our Customized Outfits 3D tool. <strong>Explore your imazination</strong>{" "} and show your own style.
                            </p>
                            <CustomButton
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>

            )}
        </AnimatePresence>//component by framer motion
    )
}

export default Home
