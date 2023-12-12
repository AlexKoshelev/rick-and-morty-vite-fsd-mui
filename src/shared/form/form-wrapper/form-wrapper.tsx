interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
}
const FormWrapper: React.FC<FormWrapperProps> = (props) => {
  const { children, title } = props;
  return (
    <section className="form_wrapper">
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </section>
  );
};

export default FormWrapper;
