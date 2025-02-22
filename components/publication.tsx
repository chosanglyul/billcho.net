'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import profileData from '@/public/profile.json';

const name: string = profileData.name;

export interface PublicationData {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  highlight?: string;
  figures?: string[];
  additional_informations?: string[];
};

const Publication: React.FC<{ pub: PublicationData }> = ({ pub }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => { setExpanded(prev => !prev); };

  return (
        <div
          key={pub.id}
          className="p-6 border rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{pub.title}</h2>
            <button
              onClick={ toggleExpanded }
              className="text-blue-500 hover:underline"
            >
              {expanded ? 'Collapse' : 'Expand'}
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

          {expanded && (
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
  );
};

export default Publication;