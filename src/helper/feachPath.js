export async function fetchDestinationPaths() {
  try {
    const res = await fetch("https://www.earthyhues.co.in/api-testimonials"); 
    if (!res.ok) throw new Error("Failed to fetch destination data");
    
    const data = await res.json();
    const testimonialsPaths = data.map(testimonials => 
      `/testimonial/${testimonials.testimonials_url}`
    );

    // return destinationPaths;
    console.log(testimonialsPaths);
  } catch (error) {
    console.error("Error fetching destination paths:", error);
    return [];
  }
}