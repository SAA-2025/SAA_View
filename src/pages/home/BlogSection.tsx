import Button from "../../components/buttons/Button";
import BlogCarousel from "./BlogsCarousel"
import '../../../style.css'

const BlogSection = () => {
    return (
        <section className="py-5" id="blogs-carousel">
            <div className="container">
                <div className="row mb-2">
                    <BlogCarousel/>
                </div>
                <div className="d-flex justify-content-center">
                    <Button text="ამბები" href="/SAA_View"/>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;