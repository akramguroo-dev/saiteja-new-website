package com.saitejainfotech.website.controller;

import com.saitejainfotech.website.dto.QuotationRequest;
import com.saitejainfotech.website.entity.Quotation;
import com.saitejainfotech.website.service.QuotationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/quotations")
public class QuotationController {

    private final QuotationService quotationService;

    public QuotationController(QuotationService quotationService) {
        this.quotationService = quotationService;
    }

    @PostMapping
    public ResponseEntity<Quotation> createQuotation(
            @Valid @RequestBody QuotationRequest request) {

        Quotation quotation = new Quotation();

        quotation.setName(request.getName());
        quotation.setEmail(request.getEmail());
        quotation.setPhone(request.getPhone());
        quotation.setProjectType(request.getProjectType());
        quotation.setBudget(request.getBudget());
        quotation.setTimeline(request.getTimeline());
        quotation.setProjectDetails(request.getProjectDetails());

        Quotation savedQuotation = quotationService.createQuotation(quotation);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedQuotation);
    }
}