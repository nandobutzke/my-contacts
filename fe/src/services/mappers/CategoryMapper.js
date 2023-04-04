class CategoryMapper {
  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
      contacts_count: Number(persistenceCategory.contacts_count),
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
