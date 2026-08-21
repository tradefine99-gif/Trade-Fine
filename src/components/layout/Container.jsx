// components/layout/Container.jsx

export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-[1700px] px-6 xl:px-12 2xl:px-16">
      {children}
    </div>
  );
}