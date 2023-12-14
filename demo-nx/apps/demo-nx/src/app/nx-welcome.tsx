/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

import React from 'react';

const MyRemote = React.lazy(() => import('myremote/Module'));

export function NxWelcome({ title }: { title: string }) {
  return (
    <>
      <span>This is a shell</span>
      <MyRemote />
    </>
  );
}

export default NxWelcome;
