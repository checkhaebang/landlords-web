import styled from 'styled-components';
import color from 'styles/color';

interface InputFieldProps {
  fontSize: string;
  fontWeight: string;
  height: string;
  name: string;
  type: string;
}

const InputField = styled.input<InputFieldProps>`
  width: 100%;
  height: ${({ height }) => height};
  border-radius: 2px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.03);
  background-color: rgba(133, 131, 146, 0.08);
  border: none;
  font-family: SpoqaHanSans;
  font-size: ${({ fontSize }) => fontSize};;
  font-weight: ${({ fontWeight }) => fontWeight};;
  line-height: 1.3;
  color: ${color.grayscale29};
  padding: 12px 16px;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${color.grayscalec9};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${color.grayscalec9};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${color.grayscalec9};
  }
`;

export { InputField };
