export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

    </div>
  )
}