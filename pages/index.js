export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">I love you</h1>
        <img 
          src="/heart.png" 
          alt="Heart" 
          width="360" 
          height="360"
          className="mx-auto mt-4"
        />
      </div>
    </div>
  );
}
