export default function AccordionDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="bg-gradient-to-r from-[#52a06f]  to-[#5e9de3] text-transparent bg-clip-text  ">
      {children}
    </span>
  );
}
