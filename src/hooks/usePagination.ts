import { useState } from "react";
import HeroType from "../types/HeroType";

const usePagination = (data: HeroType[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };

  function jump(page: number) {
    setCurrentPage(page);
  }
  return { jump, getCurrentData };
};
export default usePagination;

// const PAGE = 1; const PAGE_SIZE = 3(колво элтов на стр);  эти переменные вынести в стэйт, чтобы пользователь мог их сам задавать. дальше data.filtered = data.filter(...).slice(PAGE_SIZE*(PAGE - 1), PAGE_SIZE * PAGE)
