export const InstructionStep = ({
  style,
  styleTitle,
  styleDescription,
  img,
  title,
  description,
}) => {
  return (
    <div className={style}>
      <img src={img} alt={description} />
      <p className={styleTitle}>{title}</p>
      <span className="separation" />
      <p className={styleDescription}>{description}</p>
    </div>
  );
};
