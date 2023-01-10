import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Input: FC<Props> = ({ label, id, ...props }) => {
  return (
    <div className="mb-3">
      <label>{label}</label>
      <input id={id} className="input input-bordered w-full" {...props} />
    </div>
  );
};

export const TextArea: FC<Props> = ({ label, id, ...props }) => {
  return (
    <div className="mb-3">
      <label>{label}</label>
      <input id={id} className="input input-bordered w-full" {...props} />
    </div>
  );
};

// export { Input, TextArea };
