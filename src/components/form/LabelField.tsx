import * as React from 'react';
import Form from 'rc-field-form';
import { cn } from '@/lib/style';
const { Field } = Form;

interface ErrorProps {
  warning?: boolean;
  children?: React.ReactNode[];
}

type FieldProps = any;

const Error: React.FC<ErrorProps> = ({ children, warning }) => (
  <ul style={{ color: warning ? 'orange' : 'red' }}>
    {(children || []).map((error: React.ReactNode, index: number) => (
      <li key={index}>{error}</li>
    ))}
  </ul>
);

interface LabelFieldProps extends FieldProps {
  hideLabel?: boolean;
  label?: React.ReactNode;
  labelClassName?: string;
}

const LabelField: React.FunctionComponent<LabelFieldProps> = ({
  name,
  label,
  children,
  hideLabel,
  labelClassName,
  className,
  ...restProps
}) => (
  <Field name={name} {...restProps}>
    {(control, meta, form) => {
      const childNode =
        typeof children === 'function'
          ? children(control, meta, form)
          : React.cloneElement(children as React.ReactElement, {
              ...control,
            });
      const hasError = meta.errors.length > 0;
      const hasWarning = meta.warnings.length > 0;
      return (
        <div className={cn('relative', className)}>
          <div className='flex'>
            {!hideLabel && <label className={`flex-none w-24 ${labelClassName}`}>{label || name}</label>}
            {childNode}
          </div>
          {hasError && <Error>{meta.errors}</Error>}
          {hasWarning && <Error warning>{meta.warnings}</Error>}
        </div>
      );
    }}
  </Field>
);

export default LabelField;