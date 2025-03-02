export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white">I love you</h1>
        <img 
          src="/heart.png" 
          alt="Heart" 
          width="360" 
          height="360"
          className="mt-4"
        />
      </div>
    </div>
  );
}
