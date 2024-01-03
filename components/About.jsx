"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : null,
  });

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 relative"
          >
            <Image src={"/about/img1.jpg"} width={559} height={721} alt="" />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="xl:max-w-[470px]"
          >
            <h2 className="h2 mb-[38px]">About Chamonify</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              nisi impedit esse praesentium sint at dolor saepe distinctio hic.
              Tenetur, et consectetur nobis voluptatem explicabo amet voluptate
              ipsa? Possimus, sunt!
            </p>
            <div className="my-5 xl:my-10 min-h-[35px]">
              {inView && <Stats />}
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              asperiores ipsam odit, a totam reiciendis illum quia reprehenderit
              necessitatibus. Nam provident, molestiae, corrupti perferendis
              voluptatem esse soluta sit iure quam adipisci incidunt placeat hic
              accusantium dignissimos distinctio harum nemo ab?
            </p>
            <Button variant="accent">Explore more</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
