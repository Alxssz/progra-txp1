-- Migration: Añadir columna cui a la tabla persona
ALTER TABLE persona
ADD COLUMN cui VARCHAR(64);

