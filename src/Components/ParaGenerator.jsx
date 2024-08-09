import React, { useMemo, useState } from "react";

export default function ParaGenerator(){
    const [wordCount,setWordCount] = useState(0)
    const [para, setPara] = useState("");
    const paraWords = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, delectus cumque quae laudantium excepturi officiis eveniet, a possimus earum culpa rerum voluptas mollitia. Voluptate harum veniam quas provident ea id incidunt inventore dignissimos. Accusamus voluptas officiis, corporis eos tempora ullam enim explicabo esse dolores ad nihil animi aliquid obcaecati libero?'
    const wordArr = useMemo(()=>{return paraWords.split(" ")},[]) 

    function handleClick(){
        let str = ""
        if(wordCount ==0){
            setPara(" Enter value greater than 0")
            return
        }
        for (let i = 0; i < wordCount; i++) {
            // console.log(wordArr);
            str+= wordArr[Math.floor(Math.random() * wordArr.length)]+" "
        }
        setPara(str)
    }
    return(
        <div className="flex h-screen justify-center ">
            <div className="flex flex-col items-center w-full mt-9 gap-5">
                <div className="font-sans font-semibold text-2xl">Para Generator</div>
                <div className="flex gap-3 w-full items-center justify-center">
                    <input type="number" placeholder="Enter Number Of Words" className=" border border-gray-300 w-1/2 h-12 pl-3 " min={0} onChange={(e)=>{ e.target.value >0 ? setWordCount(e.target.value) : 0}} />
                    <button className="w-24 h-11 border rounded-xl font-sans focus:outline-none bg-black text-white" onClick={handleClick}>Generate</button>
                </div>
                <div className="w-5/12">
                    {para}
                </div>
            </div>
        </div>
    )
}