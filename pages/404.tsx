import React from 'react';
import Link from "next/link";

type Props = {}

function Notfund() {
  return (
    <div>
        <h1>404 Error</h1>
        <p>Go back to \<Link href="hero">HomePage</Link></p>
    </div>
  )
}

export default Notfund