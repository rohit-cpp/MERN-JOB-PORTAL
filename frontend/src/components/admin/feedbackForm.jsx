import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { toast } from "react-hot-toast";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Navbar from "../shared/Navbar";
import { toast } from "sonner";
import { FEEDBACK_API_END_POINT } from "@/utils/constant";
import { setLoading } from "@/redux/authSlice";
// import { setLoading } from "@/redux/slices/authSlice"; // Update this path as needed

const FeedbackForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (rating) => {
    setForm({ ...form, rating });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${FEEDBACK_API_END_POINT}/submit`, form, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Feedback submitted!");
        setForm({ name: "", email: "", feedback: "", rating: 0 });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error(error.response?.data?.message || "Submission failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto py-14">
        <h2 className="text-5xl font-bold mb-6 text-center">Submit Feedback</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <Label className="py-1">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border p-2 rounded-sm"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label className="py-1">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded-sm"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label className="py-1">Your Feedback</Label>
            <textarea
              name="feedback"
              placeholder="Your Feedback"
              className="w-full border p-2 rounded-sm resize-none"
              value={form.feedback}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center text-3xl font-semibold">
            <label className="mr-2">Rating:</label>
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={`cursor-pointer ml-1 ${
                  num <= form.rating ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => handleRating(num)}
              >
                ★
              </span>
            ))}
          </div>
          <div className="text-center">
            <Button
              type="submit"
              className="text-white px-4 py-2 w-60 rounded-sm"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
