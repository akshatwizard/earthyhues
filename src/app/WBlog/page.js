import BlogForm from "./BlogForm";

const WBlog = () => {

    return (

        <>
            <section className="page-header">
                <div className="container">

                </div>
            </section>

            <div className='container'>
                        <h3
                            className="offer-one__heading sec-title__heading text-left headingdest"
                            style={{
                                // marginTop: "-62px",
                                paddingLeft: '200',
                                fontSize: "25px!important",
                                left: 23
                            }}>
                            <span className="font-bernadette-rough display-4">
                                Write A Blog
                            </span>
                        </h3>
                <div className="comment-form">
                    <div className="comment-form__inner-container container-fluid">
                        <h3 className="comment-form__title">Leave a Comment</h3>
                        <BlogForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WBlog;

export const metadata = {
    title: 'Write A blog about your journey and about Earthy Huse | Earthy Hues',
    description: 'Team of travel enthusiasts with extensive knowledge of wildlife & nature tourism',
}
