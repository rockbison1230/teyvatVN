import quill from './assets/images/quill.png';

export default function Loading() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#1A1D3B] to-[#424A91] flex flex-col items-center justify-center">
      <img
        src={quill}
        alt="Quill"
        className="w-24 h-24 mb-4"
      />
      <h1 className="text-white text-4xl font-quattrocento text-center">
        Rewrite the lore, your way!
      </h1>
    </div>
  );
}