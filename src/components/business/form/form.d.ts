interface InputProps {
  isError: boolean;
  errorMessage: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  validate: (str: string) => void;
  className?: string;
}
