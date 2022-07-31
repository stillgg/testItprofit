interface InputProps {
  isError: boolean;
  errorMessage: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  validate: (str: string) => void;
  className?: string;
}

type Maybe<Type> = {
  [Property in keyof Type]?: Type[Property];
};
