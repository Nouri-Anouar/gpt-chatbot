import { Inter } from "next/font/google";
import useFetch from "@/hooks/useFetch";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const data = useFetch("/api/generate-answer?prompt=hello");
  console.log(data);

  return <h1>OpenAI Chatbot</h1>;
}
