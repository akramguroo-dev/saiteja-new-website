package com.saitejainfotech.website.repository;

import com.saitejainfotech.website.entity.Quotation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuotationRepository extends JpaRepository<Quotation, Long> {
}