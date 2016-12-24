CREATE TABLE IF NOT EXISTS foo
(
    id    SERIAL PRIMARY KEY NOT NULL,
    bar   VARCHAR(42) NOT NULL,
    baz   INTEGER NOT NULL
);
CREATE UNIQUE INDEX foo_id ON foo (id);

INSERT INTO foo (bar, baz) VALUES ('question', 42);