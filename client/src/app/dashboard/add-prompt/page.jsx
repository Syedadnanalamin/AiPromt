import React from 'react';
import Addpromts from '@/components/dashboard/addpromts/Addpromts';

export const metadata = {
  title: 'Add New Prompt | Dashboard - PromptMatrix',
  description: 'Create and submit a new AI prompt template for community moderation and marketplace listing.',
};

export default function AddPromptPage() {
  return (
    <div className="w-full">
      <Addpromts />
    </div>
  );
}