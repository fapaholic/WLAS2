import tadlip from "../assets/profile-pictures/Tadlip.png";
import galleros from "../assets/profile-pictures/Galleros.jpg";
import aquino from "../assets/profile-pictures/Aquino.jpg";
import cesar from "../assets/profile-pictures/Cesar.jpg";
import montefalcon from "../assets/profile-pictures/Montefalcon.jpg";

const MeetTheTeam = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 h-[100vh]">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Meet the Team
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Our diverse team is dedicated to creating innovative solutions and ensuring
        the success of every project we undertake. <span className="opacity-50">Hover to see Description</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 flex mt-10 justify-center">
        <div className=" ease-in-out duration-150 rounded-lg w-fit hover:opacity-100 h-[400px] overflow-hidden hover:h-fit border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 p-4 opacity-10">
          <img src={montefalcon} alt="John Doe" className="w-full h-40 mb-4 rounded-lg object-cover" />
          <h2 className="text-lg font-semibold">Montefalcon, Jasper</h2>
          <p className="text-sm text-neutral-600">Project Manager</p>
          <p className="mt-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget urna eget velit tincidunt posuere.</p>
        </div>
        <div className=" ease-in-out duration-150 rounded-lg w-fit hover:opacity-100 h-[400px] overflow-hidden hover:h-fit border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 p-4 opacity-10">
          <img src={tadlip} alt="John Doe" className="w-full h-40 mb-4 rounded-lg object-cover" />
          <h2 className="text-lg font-semibold">Tadlip, Ben Charlie</h2>
          <p className="text-sm text-neutral-600">Software Engineer</p>
          <p className="mt-2 text-justify ">Focuses more on logical field of thinking and rational based reasoning. Hates people that feel entitled. Loves programming but isnt loved back</p>
        </div>
        <div className=" ease-in-out duration-150 rounded-lg w-fit hover:opacity-100 h-[400px] overflow-hidden hover:h-fit border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 p-4 opacity-10">
          <img src={aquino} alt="John Doe" className="w-full h-40 mb-4 rounded-lg object-cover" />
          <h2 className="text-lg font-semibold">Aquino, Jay Nino</h2>
          <p className="text-sm text-neutral-600">Resource Manager</p>
          <p className="mt-2 text-justify">Hey, I'm Jay Aquino, residing in Balanok near Mansanitas. A sports enthusiast, you'll often find me on the basketball court, as the game truly ignites my passion. My academic pursuits led me to Gingoog City Colleges, where I not only honed my skills but also discovered new horizons.</p>
        </div>
        <div className=" ease-in-out duration-150 rounded-lg w-fit hover:opacity-100 h-[400px] overflow-hidden hover:h-fit border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 p-4 opacity-10">
          <img src={cesar} alt="John Doe" className="w-full h-40 mb-4 rounded-lg object-cover" />
          <h2 className="text-lg font-semibold">Cesar, Christian Lou</h2>
          <p className="text-sm text-neutral-600">Product Designer</p>
          <p className="mt-2 text-justify">Hello, I'm Christian, born on December 26, 2002, and hailing from Pedlagahan, Porok 6. I pursued my education at Gingiog City Colleges, where I cultivated a passion for learning and personal growth.</p>
        </div>
        <div className=" ease-in-out duration-150 rounded-lg w-fit hover:opacity-100 h-[400px] overflow-hidden hover:h-fit border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 p-4 opacity-10">
          <img src={galleros} alt="John Doe" className="w-full h-40 mb-4 rounded-lg object-cover" />
          <h2 className="text-lg font-semibold">Galleros, Rivin </h2>
          <p className="text-sm text-neutral-600">Marketing Specialist</p>
          <p className="mt-2 text-justify">Hello, I'm Rivin Galleros, residing near Magals, close to the school. My faithful companion is a dog named Bits. My educational journey led me to Gingoog City Colleges, where I immersed myself in learning and personal development. </p>
        </div>
      </div>
      <div id="contact"></div>
    </div>
  );
};

export default MeetTheTeam;
