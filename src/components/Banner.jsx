export default function Banner() {
  return (
    <section className='relative w-full h-96 bg-orange-300'>
      <div className='w-full h-full bg-cover bg-banner opacity-80'></div>

      <div className='absolute top-32 w-full text-center text-white'>
        <h2 className='text-5xl mb-4'>Teeny Garden</h2>
        <p className='text-2xl'>당신의 일상을 빛내줄 작은 정원, 티니가든입니다.</p>
      </div>
    </section>
  )
}