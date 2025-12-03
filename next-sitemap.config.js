async function fetchTravelBlogPaths() {
  try {
    const res = await fetch("https://www.exportleftovers.in/api-travel-blog");
    if (!res.ok) throw new Error("Failed to fetch travel blogs");
    const blogs = await res.json();
    const blogPaths = blogs.map((blog) => `/blog/${blog.blog_url}`);
    return blogPaths;
  } catch (error) {
    console.error("Error fetching travel blog paths:", error);
    return [];
  }
}

async function consciousTravel() {
  try {
    const res = await fetch("https://www.exportleftovers.in/api-conscious-travel");
    if (!res.ok) throw new Error("Failed to fetch conscious travel data");

    const data = await res.json();
    const { testimonials_conscious } = data;

    if (!Array.isArray(testimonials_conscious)) {
      throw new Error("Unexpected data format");
    }

    const travelPaths = testimonials_conscious.map(
      (testimonial) => `/conscious-travel/${testimonial.testimonials_url}`
    );
    return travelPaths;
  } catch (error) {
    console.error("Error fetching conscious travel paths:", error);
    return [];
  }
}

async function fetchDestinationPaths() {
  try {
    const res = await fetch("https://www.exportleftovers.in/home-menu");
    if (!res.ok) throw new Error("Failed to fetch destination data");

    const data = await res.json();
    const destinationPaths = data[0].destination.map(
      (destination) => `/destinations/${destination.destination_url}`
    );

    return destinationPaths;
  } catch (error) {
    console.error("Error fetching destination paths:", error);
    return [];
  }
}

async function fetchPassionPaths() {
  try {
    const res = await fetch("https://www.exportleftovers.in/home-menu");
    if (!res.ok) throw new Error("Failed to fetch passion data");

    const data = await res.json();
    const passionPaths = data[0].passion.map(
      (passion) => `/passions/${passion.passion_url}`
    );

    return passionPaths;
  } catch (error) {
    console.error("Error fetching passion paths:", error);
    return [];
  }
}

async function fetchPackagesPaths() {
  try {
    const res = await fetch("https://www.exportleftovers.in/apipackages");
    if (!res.ok) throw new Error("Failed to fetch packages data");

    const data = await res.json();
    const packagePaths = data.map(
      (packages) => `/packages/${packages.package_url}`
    );

    return packagePaths;
  } catch (error) {
    console.error("Error fetching packages paths:", error);
    return [];
  }
}

async function fetchTestimonialPaths() {
  try {
    const res = await fetch("https://www.exportleftovers.in/api-testimonials");
    if (!res.ok) throw new Error("Failed to fetch testimonials data");

    const data = await res.json();
    const testimonialsPaths = data.map(
      (testimonials) => `/testimonial/${testimonials.testimonials_url}`
    );

    return testimonialsPaths;
  } catch (error) {
    console.error("Error fetching testimonials paths:", error);
    return [];
  }
}

module.exports = {
  siteUrl: "https://www.earthyhues.com/",
  generateRobotsTxt: true,
  transform: async (config, path) => ({
    loc: path,
    changefreq: "daily",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  }),
  additionalPaths: async (config) => {
    const blogPaths = await fetchTravelBlogPaths();
    const consciousTravelPaths = await consciousTravel();
    const destinationPaths = await fetchDestinationPaths();
    const passionPaths = await fetchPassionPaths();
    const packagesPaths = await fetchPackagesPaths();
    const testimonialsPaths = await fetchTestimonialPaths();

    // Static paths and their priorities
    const staticPaths = [
      { loc: "https://www.earthyhues.com/", priority: 1.00 },
      { loc: "https://www.earthyhues.com/packages", priority: 0.80 },
      { loc: "https://www.earthyhues.com/testimonial", priority: 0.80 },
      { loc: "https://www.earthyhues.com/conscious-travel", priority: 0.80 },
      { loc: "https://www.earthyhues.com/blog", priority: 0.80 },
      { loc: "https://www.earthyhues.com/Our-story", priority: 0.80 },
      { loc: "https://www.earthyhues.com/Why-EarthyHues", priority: 0.80 },
      { loc: "https://www.earthyhues.com/passion/beach-chill-698", priority: 0.80 },
      { loc: "https://www.earthyhues.com/passion/water-sports-705", priority: 0.80 },
      { loc: "https://www.earthyhues.com/passion/little-wanderer-704", priority: 0.80 },
      { loc: "https://www.earthyhues.com/passion/birding-699", priority: 0.80 },
      { loc: "https://www.earthyhues.com/passion/wildlife-16", priority: 0.80 },
      { loc: "https://www.earthyhues.com/PrivacyPolicy", priority: 0.80 },
      { loc: "https://www.earthyhues.com/WBlog", priority: 0.80 },
      { loc: "https://www.earthyhues.com/RefundPolicy", priority: 0.80 },
      { loc: "https://www.earthyhues.com/TermsOfServices", priority: 0.80 },
      { loc: "https://www.earthyhues.com/passion/Why-EarthyHues", priority: 0.64 },
      { loc: "https://www.earthyhues.com/passion/RefundPolicy", priority: 0.64 },
      { loc: "https://www.earthyhues.com/passion/TermsOfServices", priority: 0.64 },
    ];

    // Combine all paths
    const allPaths = [
      ...staticPaths.map((path) => ({
        loc: path.loc,
        changefreq: "daily",
        priority: path.priority,
        lastmod: new Date().toISOString(),
      })),
      ...blogPaths.map((path) => ({
        loc: path,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })),
      ...consciousTravelPaths.map((path) => ({
        loc: path,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })),
      ...destinationPaths.map((path) => ({
        loc: path,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })),
      ...passionPaths.map((path) => ({
        loc: path,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })),
      ...packagesPaths.map((path) => ({
        loc: path,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })),
      ...testimonialsPaths.map((path) => ({
        loc: path,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })),
    ];

    return allPaths;
  },
};
