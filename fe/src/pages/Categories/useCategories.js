import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('asc');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryBeingDeteleted, setCategoryBeingDeleted] = useState({});
  const [isLoadingDeleteAction, setIsLoadingDeleteAction] = useState(true);

  const filteredCategories = useMemo(() => categories.filter((category) => (
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [categories, searchTerm]);

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);

      const categoryData = await CategoriesService.listCategories(orderBy);

      setCategories(categoryData);
    } catch {
      setHasError(true);
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  function handleChangeSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleTryAgain() {
    loadCategories();
  }

  async function handleOpenDeleteCategoryModal(id) {
    setIsModalVisible(true);

    const categoryData = await CategoriesService.getCategoryById(id);

    setIsLoadingDeleteAction(false);
    setCategoryBeingDeleted(categoryData);
  }

  function handleCloseDeleteCategoryModal() {
    setIsModalVisible(false);
  }

  async function handleDeleteCategory() {
    try {
      setIsLoadingDeleteAction(true);

      await CategoriesService.deleteCategory(categoryBeingDeteleted.id);

      handleCloseDeleteCategoryModal();

      toast({
        type: 'success',
        text: 'A categoria foi deletada com sucesso!',
      });

      setCategories((prevState) => prevState.filter((category) => (
        category.id !== categoryBeingDeteleted.id
      )));
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao tentar excluir a categoria!',
      });
    } finally {
      setIsLoadingDeleteAction(false);
    }
  }

  return {
    categories,
    searchTerm,
    orderBy,
    handleCloseDeleteCategoryModal,
    isLoading,
    hasError,
    isModalVisible,
    isLoadingDeleteAction,
    filteredCategories,
    handleChangeSearch,
    handleOrderBy,
    handleTryAgain,
    handleOpenDeleteCategoryModal,
    handleDeleteCategory,
  };
}
