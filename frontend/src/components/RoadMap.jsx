import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ReactMarkdown from "react-markdown";

const RoadMap = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const formatMarkdown = (text) => {
    return text
      .replace(/()(?!\s)/g, "") // Ensure space after bold
      .replace(/\n(?=[^\n])/g, "\n\n") // Force blank lines between lines
      .trim();
  };

  const formattedAnswer = formatMarkdown(answer);

  async function generateAnswer() {
    setAnswer("loading...");

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCpqp4alttTQdUhXDLs6oacAAwvo3nGN3s",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });

    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  return (
    <div>
      <div>
        <Navbar />
        <div className="mt-10">
          <h1 className="text-5xl text-center my-5 font-semibold">
            Get{" "}
            <span className="text-6xl font-bold text-cyan-600 underline">
              {" "}
              AI RoadMaps
            </span>{" "}
            for your{" "}
            <div className="text-4xl font-semibold my-2 ">
              Development Journey
            </div>{" "}
          </h1>
        </div>
        <div className="flex flex-col justify-between items-center my-10">
          <div className="w-2/4">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Give a Job ready Roadmap for (e.g Devops Engineer)"
            />
          </div>
          <div className="pt-5">
            <Button
              onClick={generateAnswer}
              variant="ghost"
              className="bg-amber-400 cursor-pointer  hover:bg-amber-600"
            >
              Generate answer
            </Button>
          </div>
        </div>
        <div className="text-left px-50 prose prose-lg prose-headings:my-4 prose-p:my-2 prose-li:my-1">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2
                  className="text-2xl font-bold text-cyan-700 mt-6 mb-2"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="text-gray-800 my-3 leading-relaxed" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="list-disc ml-5 my-1" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-black" {...props} />
              ),
            }}
          >
            {formattedAnswer}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
