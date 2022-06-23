import minifaker, { jobTitle, username } from "minifaker";
import { useEffect,useState } from "react";

export default function Suggestions() {
    const [suggestions, setSuggestions] = useState([])
    useEffect(()=>{
        const suggestions = minifaker.array(6, (i)=>(
            {

        username: minifaker.username({locale: "en"}),
        jobTitle: minifaker.jobTitle(),
        id: i,
    }));
    setSuggestions(suggestions);
}, []);



  return <div className="mt-4 ml-10">
    <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Sizin için öneriler</h3>
        <button className="text-gray-600 font-semibold">Hepsini gör</button>
    </div>

    {suggestions.map(suggestion =>(
        <div key={suggestion.id} className="flex items-center justify-between mt-3">
            <img className="h-10 rounded-full border p-[2px]" src= {`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="" />
             <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{suggestions.username}</h2>
                <h3 className="font-sm text-gray-500 truncate w-[230px]">{suggestions.jobTitle}</h3>
                </div>
                <button className="font-semibold text-blue-400 text-sm">Takip et</button>
            </div>
    ))}

    </div>;
  
}
