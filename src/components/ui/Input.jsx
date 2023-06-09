export default function Input({type, name, value, required, placeholder, onChange}) {
  return (
    <input
      className='p-4 outline-none border border-gray-200 rounded-sm'
      type={type}
      name={name}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}