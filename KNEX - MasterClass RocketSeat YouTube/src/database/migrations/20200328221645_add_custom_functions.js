const CUSTOM_FUNCTIONS = `
CREATE OR REPLACE FUNCTION on_update_timestamp()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';
`

const DROP_CUSTOM_FUNCTIONS = `
DROP FUNCTION on_update_timestamp()
`

exports.up = async knex => knex.raw(CUSTOM_FUNCTIONS)
exports.down = async knex => knex.raw(DROP_CUSTOM_FUNCTIONS)
