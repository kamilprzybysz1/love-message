export default function LoveMessage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-5xl font-bold text-red-500">I love you</h1>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Red_Heart.svg/1024px-Red_Heart.svg.png" 
        alt="Heart" 
        className="w-32 h-32 mt-4" 
      />
    </div>
  );
}
