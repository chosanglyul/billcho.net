"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import profileData from '@/public/profile.json';

interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  highlight?: string;
  figures?: string[];
  additional_informations?: string[];
}

const name: string = profileData.name;
const publications: Publication[] = profileData.publications.reverse();

export default function Home() {
  const [expandedPublication, setExpandedPublication] = useState<string | null>(null);

  const togglePublicationExpand = (publicationId: string) => {
    setExpandedPublication(
      expandedPublication === publicationId ? null : publicationId
    );
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-6">Publications</h1>

      {publications.map((pub) => (
        <div
          key={pub.id}
          className="mb-8 p-6 border rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{pub.title}</h2>
            <button
              onClick={() => togglePublicationExpand(pub.id)}
              className="text-blue-500 hover:underline"
            >
              {expandedPublication === pub.id ? 'Collapse' : 'Expand'}
            </button>
          </div>

          <p className="text-gray-600 mt-2">
            {pub.authors.map((author, index) => (
              <span key={index}>
                {author === name ? <strong>{author}</strong> : author}
                {index < pub.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>

          <p className="text-gray-600 mt-2">{pub.journal}, {pub.year}</p>

          {pub.highlight && (
            <p className="font-bold mt-2">{pub.highlight}</p>
          )}

          {expandedPublication === pub.id && (
            <div className="mt-4">
              <h3 className="font-bold">Abstract:</h3>
              <p className="text-gray-700 mb-4">{pub.abstract}</p>

              {pub.figures && pub.figures.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {pub.figures.map((figure, index) => (
                    <div key={index} className="relative w-full h-64">
                      <Image
                        src={figure}
                        alt={`Figure ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}