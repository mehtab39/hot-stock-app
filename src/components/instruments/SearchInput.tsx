import styled from 'styled-components';

function Search({
  input,
  setInput,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const onFormSubmit = (e: any) => {
    e.preventDefault();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <Wrapper>
      <Form onSubmit={onFormSubmit}>
        <Input
          onChange={onInputChange}
          value={input}
          placeholder="Search for a instrument..."
        />
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 5em;
`;
const Form = styled.form`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #04aa6d;
  cursor: auto;
  padding: 2rem;
  height: 1rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  height: 0px;
  width: 12rem;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: 1rem;
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export default Search;
