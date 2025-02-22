import Link from 'next/link';
import profileData from '@/public/profile.json';

const about: string = profileData.about;

const Main: React.FC = () => {
  return (
    <main className="flex items-center justify-center max-w-4xl h-screen mx-auto p-4">
      <div>
        <p className="text-lg font-semibold text-center">{about}</p>
        <p>
        My primary interest lies in machine learning (ML) and the acceleration of large-scale deep learning (DL) models. I have a diverse background in ML, systems, competitive programming, and web development. Having observed the escalating growth and complexity of DL models, I've developed an interest in tackling the challenges of efficient training and serving these models. To deepen my understanding and explore these interests further, I am double majoring in math.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/about">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
              About
              <span className="ml-2">&#8594;</span>
            </button>
          </Link>
          <Link href="/publications">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
              Publications
              <span className="ml-2">&#8594;</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;