
export default function GradientCircle() {
  return (
    <div className="relative">
      <div className="gradient-circle">
        <div className="circle w-fit h-fit rounded-full border border-neutral-200 p-2">
          <div className="inner-circle w-fit h-fit rounded-full border border-neutral-200 p-2">
            <div className="inner-innercircle w-fit h-fit rounded-full border border-neutral-200 p-2">
              <div className="inner-inner-inner-circle w-[240px] h-[240px] rounded-full border border-neutral-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[380px] h-[240px] rounded-xl bg-white shadow-xl shadow-neutral-200/60 -bottom-6 -left-10 hover:shadow-sm" />
    </div>
  )
}