package com.saitejainfotech.website.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "quotations")
public class Quotation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String phone;

    @Column(name = "project_type")
    private String projectType;

    private String budget;

    private String timeline;

    @Column(name = "project_details")
    private String projectDetails;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Quotation() {
    }

    // Getters and setters
}