import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import axios from "axios";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown";

const AiHelp = () => {
  const [answer, setAnswer] = useState("");

  const formatMarkdown = (text) => {
    return text
      .replace(/()(?!\s)/g, "") // Ensure space after bold
      .replace(/\n(?=[^\n])/g, "\n\n") // Force blank lines between lines
      .trim();
  };

  const formattedAnswer = formatMarkdown(answer);

  async function generateAnswer() {
    setAnswer("Loading...");

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCpqp4alttTQdUhXDLs6oacAAwvo3nGN3s",
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: "Why recruiters reject students from resume shortlisting",
                },
              ],
            },
          ],
        },
      });

      setAnswer(
        response.data.candidates[0].content.parts[0].text || "No answer found."
      );
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong while fetching the answer.");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="mt-10">
        <h1 className="text-5xl text-center my-5 font-semibold">
          Know why
          <span className="text-6xl font-bold text-cyan-600 underline">
            {" "}
            Recruiters
          </span>{" "}
          reject you
          <div className="text-4xl font-semibold my-2">
            in Resume Shortlisting
          </div>
        </h1>
      </div>

      <div className="flex justify-center my-10">
        <Button
          onClick={generateAnswer}
          variant="ghost"
          className="bg-amber-400 cursor-pointer hover:bg-amber-600"
        >
          Get Answer
        </Button>
      </div>

      <div className="text-left px-50 prose prose-lg prose-headings:my-4 prose-p:my-2 prose-li:my-1">
        {answer && (
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
        )}
      </div>
    </div>
  );
};

export default AiHelp;
