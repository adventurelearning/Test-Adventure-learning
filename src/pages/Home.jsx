import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const features = [
    {
      title: "Full-Stack Development",
      description:
        "Master both frontend and backend technologies with our comprehensive full-stack programs.",
      icon: "💻",
    },
    {
      title: "Mobile Development",
      description:
        "Build Android and cross-platform apps with industry-standard tools and frameworks.",
      icon: "📱",
    },
    {
      title: "IoT & Embedded Systems",
      description:
        "Learn to develop smart devices and connected systems with hands-on projects.",
      icon: "🔌",
    },
    {
      title: "Cloud Computing",
      description:
        "Deploy and manage applications using AWS, Azure, and Google Cloud platforms.",
      icon: "☁️",
    },
    {
      title: "Data Science",
      description:
        "Gain expertise in machine learning, AI, and big data analytics.",
      icon: "📊",
    },
    {
      title: "Cybersecurity",
      description:
        "Develop skills to protect systems and networks from digital attacks.",
      icon: "🔒",
    },
  ];

  const testimonials = [
    {
      quote:
        "The full-stack program helped me transition from mechanical engineering to a high-paying tech career in just 6 months.",
      author: "Priya K., Software Engineer",
    },
    {
      quote:
        "The IoT course gave me the practical skills to start my own smart home solutions business.",
      author: "Rahul M., Entrepreneur",
    },
    {
      quote:
        "After completing the Android development course, I published my first app on Google Play with 50,000+ downloads.",
      author: "Ananya S., Mobile Developer",
    },
    {
      quote:
        "The hands-on projects in the cloud computing course were exactly what employers were looking for.",
      author: "Vikram P., Cloud Architect",
    },
  ];

  // const upcomingCourses = [
  //   {
  //     title: "Full-Stack Web Development Bootcamp - July 2023",
  //     description: "12-week intensive program covering React, Node.js, MongoDB, and deployment strategies."
  //   },
  //   {
  //     title: "Android Development with Kotlin - August 2023",
  //     description: "Master modern Android development with Jetpack Compose and architecture components."
  //   },
  //   {
  //     title: "IoT Edge Computing - September 2023",
  //     description: "Learn to build intelligent edge devices with Raspberry Pi and TensorFlow Lite."
  //   },
  //   {
  //     title: "Cloud Native Applications - October 2023",
  //     description: "Develop microservices using Kubernetes, Docker, and serverless technologies."
  //   }
  // ];

  return (
    <div className="bg-white">
      <Hero />

      <section className="py-16 bg-blue-50" id="courses">
        <a
          href="https://www.adventurelearning.co.in/"
          target="_blank"
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
            Our Tech Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </a>
      </section>

      <section className="py-16 bg-white">
        {/* <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Upcoming Batches</h2>
          <div className="max-w-4xl mx-auto">
            {upcomingCourses.map((course, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 mb-8">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-700">{course.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      <section className="py-16 bg-blue-50" id="blog">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
            Tech Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-3">
                The Future of Full-Stack Development
              </h3>
              <p className="text-gray-700 mb-4">
                How emerging technologies are changing the landscape of web
                development...
              </p>
              <a
                href="https://www.adventurelearning.co.in/"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-3">
                Getting Started with IoT Projects
              </h3>
              <p className="text-gray-700 mb-4">
                Essential tools and frameworks for beginners in Internet of
                Things...
              </p>
              <a
                href="https://www.adventurelearning.co.in/"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who transformed their careers with our
            industry-aligned programs.
          </p>
          <a
            href="https://www.adventurelearning.co.in/"
            target="_blank"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
