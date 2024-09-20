'use client';

interface UserInterface {
  name: string;
}

export default function User({ name } : UserInterface) {
  return (
    <p>user name: {name}</p>
  );
}
