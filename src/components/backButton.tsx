export const BackButton: React.FC<any> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="back-button">
      <div>
        <i className="fa fa-long-arrow-left" />
      </div>
      <p>Regresar</p>
    </div>
  );
};
