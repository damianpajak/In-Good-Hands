export const InfoColumn = ({
  num,
  title,
  txt,
  style,
  numStyle,
  titleStyle,
  txtStyle,
}) => {
  return (
    <div className={style}>
      <h1 className={numStyle}>{num}</h1>
      <h2 className={titleStyle}>{title}</h2>
      <h3 className={txtStyle}>{txt}</h3>
    </div>
  );
};
