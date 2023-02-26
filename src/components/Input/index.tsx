type InputProps = {
  name?: string;
};

export default function Input({ name }: InputProps) {
  return (
    <div>
      <input
        className="bg-white p-4 border border-black w-full mb-6"
        type="text"
        placeholder={name}
      />
    </div>
  );
}
