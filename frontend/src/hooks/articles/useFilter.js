import { clearFilter, setApi, setSearch, setSection } from '../../store/modules/newsSlice';
import { useDispatch } from 'react-redux';

export function useFilter() {
  const dispatch = useDispatch();

  const handleApi = (api) => {
    dispatch(setApi(api));
  };

  const handleSearch = (search) => {
    dispatch(setSearch(search));
  };

  const handleSection = (section) => {
    dispatch(setSection(section));
  };

  const handleClear = () => {
    dispatch(clearFilter());
  };

  return {
    handleApi,
    handleSearch,
    handleSection,
    handleClear
  };
}
