const Testimonial = ({ quote, author }) => {
  return (
    <div className="bg-blue-700 p-6 rounded-lg">
      <p className="text-lg italic mb-4">"{quote}"</p>
      <p className="font-medium">— {author}</p>
    </div>
  );
};

export default Testimonial;