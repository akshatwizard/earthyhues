const Affiliation = dynamic(
  () => import("@/components/Affiliation/Affiliation"),
  {
    loading: () => <Loading />,
  }
);
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <Loading />,
});

const Header = dynamic(() => import("@/components/Header/Header"), {
  loading: () => <Loading />,
});
const SocialMedia = dynamic(
  () => import("@/components/SocialMedia/SocialMedia"),
  {
    loading: () => <Loading />,
  }
);
import Loading from "@/components/Loading/Loading";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Suspense } from "react";

export const metadata = {
  title: "World's best Nature Travel Experience | Earthy Hues",
  description: "World's best Nature Travel Experience | Earthy Hues",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../favicon.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="../assets/vendors/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/bootstrap-select/bootstrap-select.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/animate/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/fontawesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/jquery-ui/jquery-ui.css"
        />
        <link rel="stylesheet" href="../assets/vendors/jarallax/jarallax.css" />
        <link
          rel="stylesheet"
          href="../assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/nouislider/nouislider.min.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/nouislider/nouislider.pips.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/tiny-slider/tiny-slider.css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendors/trevlo-icons/style.css"
        />
        <link rel="stylesheet" href="../assets/css/trevlo.css" />
        <link rel="stylesheet" href="../assets/css/earthyhues.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        {/* Hotjar Tracking Script */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5146432,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0XBFGE00CF"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0XBFGE00CF');
          `}
        </Script>
      </head>
      <body>
        <Suspense fallback={<Loading />}>
          <SocialMedia />
          <Header />
          {children}
          <Affiliation />
          <Footer />
        </Suspense>
        {/* Other Scripts */}
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script> */}
        <script src="https://cdn-script.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="../assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../assets/vendors/bootstrap-select/bootstrap-select.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="../assets/js/earthyhues.js"></script>
      </body>
    </html>
  );
}
