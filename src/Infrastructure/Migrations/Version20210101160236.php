<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210101160236 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE content DROP CONSTRAINT fk_fec530a9464e68b');
        $this->addSql('DROP INDEX idx_fec530a9464e68b');
        $this->addSql('ALTER TABLE content ADD image VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE content DROP attachment_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE content ADD attachment_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE content DROP image');
        $this->addSql('ALTER TABLE content ADD CONSTRAINT fk_fec530a9464e68b FOREIGN KEY (attachment_id) REFERENCES attachment (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_fec530a9464e68b ON content (attachment_id)');
    }
}
