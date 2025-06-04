import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Testimonial from '../components/Testimonial';

const Home = () => {
  const features = [
    {
      title: "Outdoor Expeditions",
      description: "Learn biology, geology, and ecology through hands-on field studies in diverse environments.",
      icon: "🌲"
    },
    {
      title: "Cultural Immersion",
      description: "Study history and anthropology by living with and learning from indigenous communities.",
      icon: "🌍"
    },
    {
      title: "Survival Skills",
      description: "Develop critical thinking and problem-solving through wilderness survival training.",
      icon: "🔥"
    }
  ];

  const testimonials = [
    {
      quote: "The Amazon rainforest course changed my perspective on conservation forever.",
      author: "Sarah J., Environmental Science Student"
    },
    {
      quote: "I never knew learning could be this exciting! The survival skills course was challenging but incredibly rewarding.",
      author: "Michael T., High School Graduate"
    }
  ];

  return (
    <div className="bg-white">
      <Hero />
      
      <section className="py-16 bg-blue-50" id="courses">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Learning Adventures</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Upcoming Expeditions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-blue-600 pl-6 mb-8">
              <h3 className="text-xl font-semibold mb-2">Himalayan Ecology Trek - June 2023</h3>
              <p className="text-gray-700">Study high-altitude ecosystems while trekking through the Himalayas with expert guides.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 mb-8">
              <h3 className="text-xl font-semibold mb-2">Amazon Rainforest Research - August 2023</h3>
              <p className="text-gray-700">Participate in biodiversity research projects deep in the Amazon rainforest.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold mb-2">Desert Survival Skills - October 2023</h3>
              <p className="text-gray-700">Learn essential survival techniques in the Mojave Desert with special forces instructors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50" id="blog">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">From Our Blog</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-3">The Science of Survival</h3>
              <p className="text-gray-700 mb-4">How wilderness survival training enhances cognitive abilities and problem-solving skills...</p>
              <a target='_blank' href="https://www.adventurelearning.co.in/" className="text-blue-600 font-medium hover:underline">Read More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-3">Cultural Exchange in Education</h3>
              <p className="text-gray-700 mb-4">Why immersive cultural experiences lead to deeper learning and global awareness...</p>
              <a target='_blank' href="https://www.adventurelearning.co.in/" className="text-blue-600 font-medium hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;