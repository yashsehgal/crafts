export default function CTASection() {
  return (
    <main class="cta-section relative m-24 mt-56">
      <div class="cta-hero-title-description-wrapper grid grid-cols-1 items-center gap-2">
        <h1 class="leading-2 text-center text-5xl font-semibold tracking-tight">
          make sure <br />
          they are alright
        </h1>
        <p class="text-center text-base font-normal leading-snug tracking-tight text-neutral-500">
          be sycned, bealright
        </p>
      </div>
      <div class="cta-actions-wrapper mx-auto my-8 flex w-fit flex-row items-center justify-center gap-3">
        <button class="rounded-md border border-transparent bg-orange-300 px-3 py-1.5 font-medium tracking-tight text-orange-900 shadow-sm hover:bg-opacity-95">
          get started
        </button>
        <button class="rounded-md border bg-white px-3 py-1.5 font-medium tracking-tight shadow-sm hover:bg-neutral-50 active:bg-neutral-100">
          download for iOS
        </button>
      </div>
      <div class="absolute -top-20 left-1/2 -z-10 h-[200px] w-[200px] animate-pulse rounded-full bg-orange-300 blur-3xl transition-all" />
      <div class="absolute -top-20 left-1/3 -z-10 h-[200px] w-[200px] animate-pulse rounded-full bg-purple-300 blur-3xl transition-all" />
    </main>
  );
}
