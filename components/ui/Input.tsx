interface InputProps {
  placeholder: string;
  label: string;
  name: string;
}
const Input = ({ placeholder, label, name }: InputProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="750"
      className="relative h-11 w-full min-w-[200px]"
    >
      <input
        required
        name={name}
        placeholder={placeholder}
        className="peer h-full w-full border-b border-shadow bg-[transparent] pt-4 pb-1.5 text-sm font-normal text-fade outline outline-0 transition-all placeholder-shown:border-fade focus:border-fade focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-100"
      />
      <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-fade transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-fade after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-fade peer-focus:text-[11px] peer-focus:leading-tight peer-focus:font-semibold peer-focus:text-primary peer-focus:after:scale-x-100 peer-focus:after:border-primary peer-disabled:text-[transparent] peer-disabled:peer-placeholder-shown:text-primary">
        {label}
      </label>
    </div>
  );
};

export default Input;
