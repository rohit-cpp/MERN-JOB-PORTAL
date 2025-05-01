import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal, Star } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import Navbar from "../shared/Navbar";
import { useDispatch } from "react-redux";
import { FEEDBACK_API_END_POINT } from "@/utils/constant";
import { setLoading } from "@/redux/authSlice";

const AdminFeedbackTable = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const dispatch = useDispatch();

  const fetchFeedbacks = async () => {
    try {
      dispatch(setLoading(true));
      const res = await axios.get(`${FEEDBACK_API_END_POINT}/all`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setFeedbacks(res.data.feedbacks);
      } else {
        toast.error("Failed to load feedbacks.");
      }
    } catch (err) {
      console.error("Error loading feedbacks", err);
      toast.error("Something went wrong!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-15">
        <div className="text-5xl font-semibold text-center my-8 underline">
          Users who gave{" "}
          <span className="text-cyan-800 font-bold text-6xl"> Feedback </span>
        </div>

        <div className="text-left font-semibold text-4xl mb-8 text-purple-800">
          Total Users :
          <span className="font-bold ml-2">{feedbacks.length}</span>
        </div>
        <Table>
          <TableCaption>A list of all user feedbacks</TableCaption>
          <TableHeader>
            <TableRow className="text-xl">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Feedback</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feedbacks.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        fill={i < item.rating ? "#facc15" : "none"}
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell>{item.createdAt?.split("T")[0]}</TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="w-60 text-sm">
                      <div className="font-semibold text-gray-800 mb-1">
                        Feedback:
                      </div>
                      <div className="text-gray-600 whitespace-pre-line">
                        {item.feedback}
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminFeedbackTable;
