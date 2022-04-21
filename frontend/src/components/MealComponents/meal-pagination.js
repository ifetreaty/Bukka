import Pagination from "../pagination.component";

const MealPagination = ({ loading, error, page, pages, setPage }) => {
  return (
    <div className="meal-pagination">
      {loading ? (
        <h3 className="loading-text">Loading...</h3>
      ) : error ? (
        <h3 className="error-text">{error}</h3>
      ) : (
        <>
          <Pagination page={page} pages={pages} changePage={setPage} />
        </>
      )}
    </div>
  );
};

export default MealPagination;
