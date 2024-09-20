'use client';
import React from 'react';

interface UserInterface {
  name: string;
}

export default function User({ name } : UserInterface) {
  return (
    <p>user name: {name}</p>
  );
}
