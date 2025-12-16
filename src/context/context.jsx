import { createContext, useState } from "react";
import generateText from "../config/config";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [query, setquery] = useState("");
  const [history, sethistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setshow] = useState(false);
  const [selected, setSelected] = useState(null);


  const addToHistory = (userInput, aiResponse) => {
    const newEntry = {
      id: Date.now(),
      input: userInput,
      output: aiResponse,
    };

    sethistory(prev => [newEntry, ...prev]);
  };

  const handleClick = async () => {
    setSelected(null)
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await generateText(query);
      setshow(true);
      addToHistory(query, res);
      setquery("");
    } catch (error) {
      console.error("Gemini Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const data = {
    query,
    setquery,
    handleClick,
    loading,
    show,
    history,
    setSelected,
    selected
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
