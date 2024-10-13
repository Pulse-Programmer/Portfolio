import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { BiCommentDetail } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaEnvelope, FaFolderOpen, FaInfo } from "react-icons/fa6";
import { MdBuild } from "react-icons/md";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <FaInfo /> },
            { name: "Projects", link: "#projects", icon: <FaFolderOpen /> },
            {
              name: "Testimonials",
              link: "#testimonials",
              icon: <BiCommentDetail />,
            },
            { name: "Services", link: "/services", icon: <MdBuild /> },
            // { name: "Blog", link: "/blog", icon: <FiFeather /> },
            { name: "Contact", link: "/contact", icon: <FaEnvelope /> },
          ]}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
