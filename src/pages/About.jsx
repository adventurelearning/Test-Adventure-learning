const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-green-800 mb-8">About Adventure Learning</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          Adventure Learning is revolutionizing education by taking learning out of the classroom and into the world. 
          We believe that the most profound lessons come from direct experience, challenge, and discovery.
        </p>
        <p className="text-lg text-gray-700">
          Our programs combine academic rigor with real-world adventure to create transformative educational experiences.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Story</h2>
        <p className="text-lg text-gray-700 mb-4">
          Founded in 2015 by a team of educators and explorers, Adventure Learning began with a simple question: 
          "What if education felt more like an adventure?"
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Starting with a single wilderness biology course in the Rocky Mountains, we've grown to offer programs 
          on six continents, serving thousands of students from around the world.
        </p>
        <p className="text-lg text-gray-700">
          Our alumni have gone on to become conservationists, researchers, educators, and leaders in their fields - 
          all carrying forward the spirit of adventure in their work.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Team</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our instructors are experts in their fields with extensive experience in both education and adventure. 
          They include PhD researchers, veteran wilderness guides, cultural anthropologists, and more.
        </p>
        <p className="text-lg text-gray-700">
          What unites them is a passion for experiential education and a commitment to student safety and growth.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Safety & Responsibility</h2>
        <p className="text-lg text-gray-700 mb-4">
          Safety is our top priority. All programs undergo rigorous risk assessment and are led by certified professionals. 
          We maintain small student-to-instructor ratios and comprehensive emergency protocols.
        </p>
        <p className="text-lg text-gray-700">
          We're committed to responsible tourism, environmental stewardship, and respectful cultural engagement 
          in all our programs.
        </p>
      </section>
    </div>
  );
};

export default About;