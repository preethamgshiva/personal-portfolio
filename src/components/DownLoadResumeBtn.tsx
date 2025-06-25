import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <Link
        href="/resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "default", size: "lg" })}
      >
        <Download className="mx-1" />
        Download Resume
      </Link>
    </div>
  )
}

export default DownLoadResumeBtn