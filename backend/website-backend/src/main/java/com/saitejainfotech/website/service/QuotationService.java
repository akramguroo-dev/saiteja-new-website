package com.saitejainfotech.website.service;

import com.saitejainfotech.website.entity.Quotation;
import com.saitejainfotech.website.repository.QuotationRepository;
import org.springframework.stereotype.Service;

@Service
public class QuotationService {

    private final QuotationRepository quotationRepository;

    public QuotationService(QuotationRepository quotationRepository) {
        this.quotationRepository = quotationRepository;
    }

    public Quotation createQuotation(Quotation quotation) {
        return quotationRepository.save(quotation);
    }
}