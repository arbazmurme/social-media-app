"use client"
import Image from 'next/image';
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w-md mx-auto">
      <div className="flex items-center mb-3">
        <div className="bg-gray-300 rounded-full w-10 h-10 mr-3 relative">
          <Image
            src={'/hacker.png'}
            alt="Hacker icon"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="font-semibold text-lg">{post.author || "Unknown Author"}</h2>
          <p className="text-gray-500 text-sm">
            {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-base">{post.text}</p>
      <div className="flex space-x-4 justify-between pt-10">
        <p className="text-gray-700 text-base">Likes: {post.likes.length}</p>
        <p className="text-gray-700 text-base">Comments: {post.comments.length}</p>
      </div>

    </div>
  );
};

export default PostCard;
