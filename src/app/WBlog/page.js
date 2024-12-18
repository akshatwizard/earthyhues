import BlogForm from "./BlogForm";

const WBlog = () => {
  return (
    <>
      <section className="page-header">
        <div className="container"></div>
      </section>

      <div className="container">
        <h3
          className="offer-one__heading sec-title__heading text-left headingdest"
          style={{
            // marginTop: "-62px",
            paddingLeft: "200",
            fontSize: "25px!important",
            left: 23,
          }}
        >
          <span className="font-bernadette-rough display-4">Custom Tour</span>
        </h3>
        <div className="comment-form">
          <div className="comment-form__inner-container container-fluid">
            <h3 className="comment-form__title">
              Let us Customize your Vacation. Fill up the details.
            </h3>
            <p style={{maxWidth:"700px",lineHeight:"1"}}>
              At Earthy Hues we allow you to create an entirely unique travel
              experience, designed and based around your own specific needs and
              wishes. You choose when and where you want to travel, the duration
              of your holiday and your personal budget.
            </p>
            <BlogForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default WBlog;

export const metadata = {
  title: "Write A blog about your journey and about Earthy Huse | Earthy Hues",
  description:
    "Team of travel enthusiasts with extensive knowledge of wildlife & nature tourism",
};
