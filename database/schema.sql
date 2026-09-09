-- Saiteja Infotech Website
-- Human-readable schema reference for the current Spring Data JPA entities.

CREATE DATABASE IF NOT EXISTS saiteja_website;
USE saiteja_website;

CREATE TABLE IF NOT EXISTS quotations (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    project_type VARCHAR(255),
    budget VARCHAR(255),
    timeline VARCHAR(255),
    project_details VARCHAR(255),
    created_at DATETIME(6),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    subject VARCHAR(255),
    message TEXT,
    created_at DATETIME(6),
    PRIMARY KEY (id)
);
