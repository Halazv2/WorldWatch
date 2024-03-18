// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, color, size }) {
  return (
    <button onClick={onClick} className={`bg-${color} py-4 px-8 text-white font-bold uppercase text-${size} rounded hover:bg-light`}>
      {children}
    </button>
  );
}
