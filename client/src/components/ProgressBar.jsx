const ProgressBar = ({ bgColor, progress }) => {
  const containerStyles = {
    height: 18,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,

    fontSize: 12,
  };

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgColor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div className="progress-bar" style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
