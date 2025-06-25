import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <a
        href="/resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <HackerBtn label="Download Resume" />
      </a>
    </div>
  )
}

export default DownLoadResumeBtn