import AboutSection from "@/components/homepage/AboutSection"
import { getPageBySlug } from "@/lib/wordpress"
import { imageLink, PagesData } from "../apiCall"
import ScreenAnimation from "../../components/ui/ThreeDMenu"

const AboutUs = async () => {
    const pagedata = await getPageBySlug("about")
    const image1=await imageLink(pagedata?.acf?.["img-1"])
    const image2=await imageLink(pagedata?.acf?.["img-2"])
    const pageContent={...pagedata?.acf,"img-1":image1,"img-2":image2}
    const data1 = await PagesData("about-first")
    const data2 = await PagesData("about-2nd")
    return (
        <>  
            <ScreenAnimation/>
            <AboutSection Data1={data1} Data2={data2} pageContent={pageContent} />
        </>
    )
}
export default AboutUs