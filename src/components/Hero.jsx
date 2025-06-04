const Hero = () => {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Discover the World Through Adventure</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Learn through real-world experiences with our unique adventure-based education programs.
        </p>
        <div className="space-x-4">
          <a target='_blank' href="https://www.adventurelearning.co.in/" className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition">
            Explore Courses
          </a>
          <a target='_blank' href="https://www.adventurelearning.co.in/" className="border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-800 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;