export default function Button({type, text, onClick}) {
  return (
    <button
      className='bg-brand-primary text-white py-1.5 px-4 rounded-sm hover:brightness-105'
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}