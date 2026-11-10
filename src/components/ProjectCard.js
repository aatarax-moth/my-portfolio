function ProjectCard({ project, onClick, spotlight, revealDelayMs }) {
  const handleOpen = () => onClick(project);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <div
      className={`group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-black shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition duration-220 ease-portfolio hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.22)] focus-visible:outline-3 focus-visible:outline-orange-light focus-visible:outline-offset-4 ${spotlight ? "col-span-3 max-[767px]:col-span-1" : ""}`}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      data-reveal
      style={
        revealDelayMs != null ? { "--reveal-delay": `${revealDelayMs}ms` } : null
      }
    >
      <div className="flex-1 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="block h-full w-full scale-100 object-cover transition duration-420 ease-portfolio group-hover:scale-[1.03] group-hover:saturate-[1.04] group-hover:contrast-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 bg-black p-6 text-bg">
        <h3 className="m-0 flex items-center justify-start gap-1 text-inherit">
          {project.title}
          <svg
            className="h-[18px] w-[18px] shrink-0 transition duration-220 ease-portfolio group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h3>
        <p className="m-0 text-[0.9rem] text-bg opacity-85">{project.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
