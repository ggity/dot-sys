
const Loader = ({
    loading = false,
}) => {
  return (
    loading ? (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
    ) :
    null
  )
}

export default Loader