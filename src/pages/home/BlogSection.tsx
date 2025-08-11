import Button from "../../components/buttons/Button";
import BlogCarousel from "./BlogsCarousel"

const BlogSection = () => {
    return (
        <section className="py-5" id="blogs-carousel">
            <div className="container">
                <div className="row mb-2">
                    <BlogCarousel/>
                </div>
                <div className="d-flex justify-content-center">
                    <Button text="ამბები" href="/"/>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;