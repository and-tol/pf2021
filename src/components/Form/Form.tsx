import { FormProps } from './Form.props';
import cn from 'classnames';
import styles from './Form.module.scss';
import { Button } from '..';

export const Form = ({ ...props }: FormProps): JSX.Element => {
  return (
    <form name="form" {...props} className={styles.form}>
      <h4 className={cn(styles.title, 'formTitle')}>Email</h4>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className={styles.input}
        />
      </div>
      <div className={styles.text}>
        <label htmlFor="text" className={styles.label}>
          Say Hello!
        </label>
        <textarea
          id="text"
          name="text"
          className={styles.input}
          required
        ></textarea>
      </div>
      <Button
        type="submit"
        name="submit"
        appearance="ghost"
        className={styles.submit}
      >
        Send Now
      </Button>
    </form>
  );
};
