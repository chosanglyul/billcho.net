import Link from "next/link";
import Image from "next/image";

import { SiGooglescholar } from "react-icons/si";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaGraduationCap } from "react-icons/fa";
import { AiOutlineUser } from 'react-icons/ai'

import profileData from '@/public/profile.json';

const name: string = profileData.name;
const email: string = profileData.email;

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <div className="flex items-center justify-between mb-8 space-x-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-start space-y-1">
            <p className="flex items-center space-x-2">
              <AiOutlineUser className="text-gray-700" />
              <span>{name}</span>
              <span className="block text-gray-500 text-sm">Bill Cho</span>
            </p>
            <p className="flex items-center space-x-2">
              <IoLocationSharp className="text-gray-700" />
              <span>Seoul, South Korea</span>
            </p>
            <p className="flex items-center space-x-2">
              <IoMailSharp className="text-gray-700" />
              <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a>
            </p>

            {profileData.education.map((edu, index) => (
              <div key={index} className="flex items-center space-x-2">
                <FaGraduationCap className="text-gray-700" />
                <div className="w-1/2 text-left">
                  <p className="flex items-center font-semibold">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.duration}</p>
                </div>
                <div className="w-1/2 text-right">
                  <p>{edu.school}</p>
                  {edu.gpa && (
                    <p className="text-gray-500 text-sm">{edu.gpa}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-4 mt-3">
            <Link href="https://github.com/chosanglyul" target="_blank" className="text-gray-700 hover:text-black text-2xl">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/" target="_blank" className="text-blue-500 hover:text-blue-700 text-2xl">
              <FaLinkedin />
            </Link>
            <Link href="https://x.com/" target="_blank" className="text-blue-400 hover:text-blue-600 text-2xl">
              <FaTwitter />
            </Link>
            <Link href="https://scholar.google.com/citations?user=hwR7WVoAAAAJ" target="_blank" className="text-gray-700 hover:text-black text-2xl">
              <SiGooglescholar />
            </Link>
            <Link href="/cv.pdf" target="_blank" className="text-red-500 hover:text-red-700 text-2xl">
              <FaFileDownload />
            </Link>
          </div>
        </div>

        <Image
          src="/chosanglyul.jpg"
          alt="Profile"
          className="w-36 h-48 rounded-md"
          width={144}
          height={192}
        />
      </div>
    </main>
  );
}
