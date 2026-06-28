export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-yellow-500/40 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

    </div>
  )
}