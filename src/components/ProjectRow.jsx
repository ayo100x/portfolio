const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.56 0-.28-.01-1.03-.02-2.03-3.2.69-3.88-1.55-3.88-1.55-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.11-.75.4-1.26.73-1.55-2.56-.29-5.25-1.29-5.25-5.72 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.43-5.27 5.72.41.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.79.56a11.52 11.52 0 0 0 7.84-10.91C23.5 5.66 18.35.5 12 .5Z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M14 3h7v7" />
    <path d="M10 14L21 3" />
    <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
  </svg>
)

export default function ProjectRow({ index, title, description, stack, githubUrl, demoUrl }) {
  return (
    <div className="index-row">
      <div className="index-num">{index}</div>
      <div>
        <div className="index-title">{title}</div>
        <div className="index-desc">{description}</div>
        <div className="project-stack">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href={demoUrl} target="_blank" rel="noreferrer" aria-label="Live Demo">
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  )
}
