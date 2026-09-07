package com.saitejainfotech.website.repository;

import com.saitejainfotech.website.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository
        extends JpaRepository<ContactMessage, Long> {
}