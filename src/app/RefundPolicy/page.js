import React from 'react'

const RefundPolicy = () => {
  return (
    <div>
       <section className="page-header">
            <div className="page-header__bg" />
            <div className="container">
                <div className="page-header__breadcrumb-box">
                    {/* <ul className="trevlo-breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>{data.heading_name}</li>
                    </ul> */}
                </div>
            </div>
        </section>
        <section className="tour-listing-details tour-listing-details-right mt-5">
            <div className="container">
                <div className="tour-listing-details__row row">
                <div className="col-xl-12">
                <div
                                className="wow animated fadeIn"
                                data-wow-delay="0.1s"
                                data-wow-duration="1500ms"
                            >
                                <h1 className="tour-listing-details__title tour-listing-details__overview-title">
                                Refund Policy
                                </h1>
                                {/* <h5 className='mb-3'>EarthyHues Travel Refund Policy</h5> */}
                                
                            </div>
                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.</p>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.</p>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.</p>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">For more insight, you may also want to read terms and conditions of razorpay on <a href="https://razorpay.com">https://razorpay.com</a></p>

                            <h2 className="tour-listing-details__title tour-listing-details__overview-title my-3">Refund Policy</h2>

                            <h3>Changes:</h3>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">All changes to reservations are based on the respective hotel/airline/service provider rules.</p>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">We apply a nominal service fee.</p>

                            <h3 className='my-3'>Cancellations:</h3>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">All cancellations to reservations are based on the respective hotel/airline/service provider rules.</p>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">We apply a nominal service fee.</p>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">If approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, once received from the end provider.</p>

                            <h3 className='my-3'>Late or missing refunds (if applicable)</h3>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">If you haven’t received a refund yet, first check your bank account again.</p>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">Then contact your credit card company, it may take some time before your refund is officially posted.</p>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">Next contact your bank. There is often some processing time before a refund is posted.</p>

                            <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">If you’ve done all of this and you still have not received your refund yet, please contact</p>

                                            </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default RefundPolicy

export const metadata = {
    title: 'Refund Policy | Earthy Hues',
    description: 'Team of travel enthusiasts with extensive knowledge of wildlife & nature tourism',
}