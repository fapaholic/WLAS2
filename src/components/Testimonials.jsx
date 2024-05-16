import projectImage from "../assets/project-image.png";

const ProjectOverview = () => {
  return (
    <div className="flex flex-wrap justify-center mt-[-150px] tracking-wide h-[100vh]">
      <div className="w-full sm:w-2/3 lg:w-1/2 px-4 py-2">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
          Project Overview
        </h2>
        <p className="text-lg text-center text-white">
          Our project aims to revolutionize the way we monitor water levels
          using an Arduino-based system. By continuously tracking water levels
          and triggering alerts when a threshold is reached, our system prevents
          overflow or drying out in water tanks, aquariums, and other
          applications.
        </p>
      </div>
      <div className="w-full sm:w-1/3 lg:w-1/2 px-4 py-2 m-auto mt-[20vh]">
        <img
          className="w-full h-auto rounded-lg animate-bounce ease-in-out duration-[3s]"
          src={projectImage}
          alt="Project"
        />
      </div>
    </div>
  );
};

export default ProjectOverview;
