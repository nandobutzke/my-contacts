class CategoryMapper {
  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }

  toPersistence(domainCategory) {
    return {
      id: domainCategory.id,
      name: domainCategory.name,
    };
  }
}

export default new CategoryMapper();
