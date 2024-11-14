import React from "react";
import Navbar from "./ui/shared/navbar";
import Footer from "./ui/shared/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col text-center items-center">
        <div className="w-[70%]">
          <h1 className="text-left font-bold text-3xl my-4">About Us</h1>
          <h1 className="text-left font-bold text-xl mb-2">
            Welcome to job<span className="text-[#6A38C2]"> Board</span>
          </h1>
          <p className="text-left text-gray-700">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Eu nisl habitant tristique morbi bibendum orci fames.
            Sollicitudin ac porttitor porttitor viverra nec tempus nascetur. Metus est tristique proin netus efficitur.
            Ornare libero pulvinar interdum metus a sem ornare.
            Ac curae pretium inceptos dapibus bibendum rhoncus mattis suspendisse.
            Habitasse massa class per leo auctor vestibulum congue. Nisl sagittis dapibus pharetra felis nec laoreet est tortor condimentum.
            Sagittis morbi non orci felis rhoncus fames venenatis. Sagittis blandit curae proin; a sodales vitae.
          </p>
        </div>
        <div className="w-[70%] my-6">
          <h1 className="text-left font-bold text-xl mb-2">Our Mission</h1>
          <p className="text-left text-gray-700">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Eu nisl habitant tristique morbi bibendum orci fames.
            Sollicitudin ac porttitor porttitor viverra nec tempus nascetur. Metus est tristique proin netus efficitur.
            Ornare libero pulvinar interdum metus a sem ornare.
            Ac curae pretium inceptos dapibus bibendum rhoncus mattis suspendisse.
            Habitasse massa class per leo auctor vestibulum congue. Nisl sagittis dapibus pharetra felis nec laoreet est tortor condimentum.
            Sagittis morbi non orci felis rhoncus fames venenatis. Sagittis blandit curae proin; a sodales vitae.
          </p>
        </div>
        <div className="w-[70%] my-6">
          <h1 className="text-left font-bold text-xl mb-2">
          Lorem ipsum odor amet
          </h1>
          <p className="text-left text-gray-700">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Eu nisl habitant tristique morbi bibendum orci fames.
            Sollicitudin ac porttitor porttitor viverra nec tempus nascetur. Metus est tristique proin netus efficitur.
            Ornare libero pulvinar interdum metus a sem ornare.
            Ac curae pretium inceptos dapibus bibendum rhoncus mattis suspendisse.
            Habitasse massa class per leo auctor vestibulum congue. Nisl sagittis dapibus pharetra felis nec laoreet est tortor condimentum.
            Sagittis morbi non orci felis rhoncus fames venenatis. Sagittis blandit curae proin; a sodales vitae.
          </p>
        </div>
        <div className="w-[70%] my-6">
          <p className="text-left font-bold">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Eu nisl habitant tristique morbi bibendum orci fames.
            Sollicitudin ac porttitor porttitor viverra nec tempus nascetur. Metus est tristique proin netus efficitur.
            Ornare libero pulvinar interdum metus a sem ornare.
          </p>
        </div>
        <div>
          <h1 className="text-center font-bold text-xl my-6">
            Thanks for<span className="text-[#6A38C2]"> Visiting!!</span>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
