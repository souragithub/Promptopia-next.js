'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Profile from '@components/Profile';

const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`api/users/$
          {session?user.id}/posts`);
          const data = await response.json();
    
          setPosts(data);
        }
    
        fetchPosts();
     }, []);

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }
  return (
    <Profile 
    name="My"
    desc={`Welcome to your personalised profile page. Explore your exceptional prompts and be inspired by the power of their imagination.`}
    data={[]}
    handleEdit={handleEdit}
    handleDelete={handleDelete}/>
  )
}

export default MyProfile;