import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../button";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/slice";
import { toast } from "sonner";

const Navbar = () => {
  // const user=true;
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between mx-24 max-w-7xl h-16">
        <div>
          <h1 className="text-4xl text-black font-bold ">
            job<span className="text-[#6A38C2]">Board</span>
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex font-medium items-center gap-5 ">
            {user && user.role === "recruiter" ? (
              <>
                <li className="hover:text-gray-600">
                  <Link to="/about">About Us</Link>
                </li>

                <li className="hover:text-gray-600">
                  <Link to="/">Recruiter</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:text-gray-600">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-gray-600">
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className="hover:text-gray-600">
                  <Link to="/about">About Us</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2 z-10">
              <Link to="/login">
                <Button
                  className="rounded bg-slate-200 hover:bg-white  border-gray-400"
                  variant="outline"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                {" "}
                <Button className="bg-[#814ae1] hover:bg-[#9b6dec] rounded">
                  SignUp
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    className="h-10 w-10 rounded-full"
                    src={user?.profile?.profilePhoto}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 h-auto focus:outline-none shadow mb-4 ">
                <div className="mt-4 z-20 bg-white">
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer m-4">
                      <AvatarImage
                        className="h-10 w-10 rounded-full"
                        src={user?.profile?.profilePhoto}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ml-4 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
