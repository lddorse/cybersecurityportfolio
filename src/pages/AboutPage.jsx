import FixedCardLayout from "../components/FixedCardLayout";

const AboutPage = () => {
  return (
    <FixedCardLayout>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">About Me</h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Hey, I'm Leo — a creative technologist turned cybersecurity pro. I grew up in a small town in East Central Illinois where
        I learned to value hard work, resourcefulness, and curiosity. My journey into tech started young, but it really took off
        through years of exploring art, audio, and hands-on craftsmanship.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Before cybersecurity, I worked as a freelance audio engineer, ran an art gallery, and even dabbled in stained glass and
        street art. I've always been drawn to the blend of creativity and technology — and eventually, that pulled me into the world
        of cybersecurity, where solving problems and protecting security assets feels like second nature.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        I earned a Master's in Cybersecurity and hold a CompTIA Security+ certification. My portfolio reflects a range of hands-on
        projects — from vulnerability assessments and phishing simulations to detection engineering and control implementation.
        I approach every challenge with curiosity, diligence, and a deep respect for the craft.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        When I'm not working, you'll probably find me playing guitar, making something in my home studio, or hanging with my two dogs —
        Chewie (a high-energy mini Aussie) and Pio (my loyal terrier-pit mix). I also love being outdoors, whether that means hiking, gardening,
        or just soaking up the sun with a good playlist.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">Credentials</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Master of Science (MS) in Cybersecurity – Eastern Illinois University</li>
        <li>Bachelor of Science (BS) in Art Technology – Illinois State University</li>
        <li>CompTIA Security+ Certified</li>
      </ul>

      <br/>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        I'm always looking to collaborate, solve new problems, and keep growing. Thanks for stopping by — if you'd like to talk more,
        check out the <a href="/contact" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Contact</a> page.
      </p>
    </FixedCardLayout>
  );
};

export default AboutPage;
