"use client"
export default function Home() {
  const handleClick = async ()=>{
    let data = {
      name: "Gaurav",
      role: "coder"
    }
    let a = await fetch("/api/add", {method: "POST", headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    let res = await a.json()
    console.log(res)
  }
return (
  <div>
    <h1 className="text-xl font-bold ms-auto">Next.js api router demo</h1>
    <button onClick={handleClick}></button>
  </div>
);
}
