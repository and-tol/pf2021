import { FormProps } from './Form.props';
import cn from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '..';
import styles from './Form.module.scss';
import { IFormInputs, Input } from './Form.types';

export const Form = ({ ...props }: FormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log('mail >>>>', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="form"
      {...props}
      className={styles.form}
    >
      <h4 className={cn(styles.title, 'formTitle')}>Email</h4>

      <div className={styles.inputContainer}>
        <label htmlFor={Input.Name} className={styles.label}>
          Your Name
        </label>
        <input
          {...register(Input.Name, { required: true })}
          id={Input.Name}
          type="text"
          className={styles.input}
        />
        {errors.name && (
          <span className={cn('error', styles.formError)}>
            Name is required
          </span>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor={Input.Subject} className={styles.label}>
          Subject
        </label>
        <input
          {...register(Input.Subject, {
            required: true,
            minLength: 5,
            maxLength: 30,
          })}
          id={Input.Subject}
          type="text"
          className={styles.input}
        />
        {errors.subject && (
          <span className={cn('error', styles.formError)}>
            Subject is required'
          </span>
        )}
      </div>

      <div className={styles.text}>
        <label htmlFor={Input.Text} className={styles.label}>
          Say Hello!
        </label>
        <textarea
          {...register(Input.Text, {
            required: true,
            minLength: 5,
            maxLength: 250,
          })}
          id={Input.Text}
          className={styles.input}
        ></textarea>
        {errors.subject && (
          <span className={cn('error', styles.formError)}>
            Text is required
          </span>
        )}
      </div>
      <Button type="submit" appearance="ghost" className={styles.submit}>
        Send Now
      </Button>
    </form>
  );
};
