package com.entando.template.persistence;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.entando.template.persistence.entity.EntTemplate;

public interface EntTemplateRepository extends JpaRepository<EntTemplate, Long> {

	/**
	 * Find all templates paginated
	 */
	Page<EntTemplate> findAll(Pageable pageable);

	/**
	 * Find all templates by collectionType in paginated manner
	 * @param code
	 * @param pageable
	 * @return
	 */
	Page<EntTemplate> findByCollectionType(String collectionType, Pageable pageable);
	
	/**
	 * Find all templates by collectionType
	 * @param collectionType
	 * @return
	 */
	List<EntTemplate> findByCollectionTypeIgnoreCaseOrderByTemplateName(String collectionType);


}
