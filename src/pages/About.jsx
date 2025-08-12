
const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About BelPrint</h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          BelPrint has been serving the Belize community with quality printing
          services since our founding. We pride ourselves on delivering
          professional results with fast turnaround times and competitive
          pricing.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Business Cards and Stationery</li>
          <li>Large Format Printing</li>
          <li>Marketing Materials</li>
          <li>Custom Design Services</li>
          <li>Digital Printing</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="text-gray-600">
          <p>
            <strong>Address:</strong> Seagull Street, San Pedro, Belize
          </p>
          <p>
            <strong>Phone:</strong> +501-628-8081
          </p>
          <p>
            <strong>Email:</strong> info@belprint.bz
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
